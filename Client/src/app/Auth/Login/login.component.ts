import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {AppRoutesService} from "../../Shared/Services/App Routes/app-routes.service";
import {DataService} from "../../Shared/Services/Server/Data/data.service";
import {ValidationService} from "../../Shared/Services/Validation/validation.service";

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {

  readonly loginForm: FormGroup;
  readonly usernameFormControl: AbstractControl;
  readonly passwordFormControl: AbstractControl;

  public hidePassword: boolean = true;
  public errorMessages: string[] = [];

  constructor(public readonly appRoutes: AppRoutesService, private _dataService: DataService, private _validationRules: ValidationService) {

    this.loginForm = new FormGroup({
      username: new FormControl('', _validationRules.createValidators()),
      password: new FormControl('', _validationRules.createValidators()),
      email: new FormControl('')
    });

    this.usernameFormControl = this.loginForm.controls['username'];
    this.passwordFormControl = this.loginForm.controls['password'];

    this.setFormControlsValidators();
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((value: any): void => {
      this.setFormControlsValidators();
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this._dataService.userLogin(this.loginForm.getRawValue());

      this._dataService.getBehaviorSubjectSuccess().subscribe({
        next: (response: any): void => {
          if (!response) {
            this.setFormControlsValidators(true);
            this._dataService.getBehaviorSubjectSuccess().complete();
          }
        },
        error: (error: any): void => {
          console.error(error);
        },
        complete: (): void => {
          console.log("Observable is COMPLETED");
        }
      });

      this._dataService.getBehaviorSubjectError().subscribe({
        next: (errorResponse: any): void => {
          if (!errorResponse) {
            this.errorMessages = [this._validationRules.messageEmpty, this._validationRules.messageEmpty, this._validationRules.messageNoServer];
            this._dataService.getBehaviorSubjectError().complete();
          }
        },
        error: (error: any): void => {
          console.error(error);
        },
        complete: (): void => {
          console.log("Observable is COMPLETED")
        }
      });
    }
  }

  private setFormControlsValidators(wrong: boolean = false): void {

    let validatorObject: {} = wrong ? {rongLogin: true} : {}

    this.usernameFormControl.clearValidators();
    this.usernameFormControl.addValidators(this._validationRules.createValidators(validatorObject));
    this.usernameFormControl.updateValueAndValidity({emitEvent: false});

    this.passwordFormControl.clearValidators();
    this.passwordFormControl.addValidators(this._validationRules.createValidators(validatorObject));
    this.passwordFormControl.updateValueAndValidity({emitEvent: false});

    this.errorMessages = [
      this._validationRules.printErrorMessage('Username', this.usernameFormControl),
      this._validationRules.printErrorMessage('Password', this.passwordFormControl),
      wrong ? this._validationRules.messageWrongLoginData : this._validationRules.messageEmpty
    ];
  }
}
