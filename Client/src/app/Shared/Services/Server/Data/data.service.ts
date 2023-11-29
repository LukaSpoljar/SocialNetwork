import { Injectable } from '@angular/core';
import {AppRoutesService} from "../../App Routes/app-routes.service";
import {AjaxService} from "../Ajax/ajax.service";
import {BehaviorSubject} from "rxjs";
import {URLParts} from "../../../Classes/Hardcoded/Hardcoded";
import {ClientStorage} from "../../../Classes/Client Storage/ClientStorage";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly behaviorSubjects: { success: any, error: any };

  constructor(readonly appRoutes: AppRoutesService, private _ajaxService: AjaxService) {
    this.behaviorSubjects = {
      success: new BehaviorSubject({}),
      error: new BehaviorSubject({}),
    }
  }


  /***** Login *****/
  userLogin(credentials: any = {}): void {
    this.resetBehaviorSubjects();
    this._ajaxService.userLogin(credentials).subscribe({
      next: (response: any): void => {
        console.log("User login data received");
        this.behaviorSubjects.success.next(response);
      },
      error: (error: any): void => {
        console.error("User login failed", error);
        this.behaviorSubjects.error.next(error);
      },
      complete: (): void => {
        this._addTokenToLocalStorage('', "IvanLuka");
        console.log("User SUCCESSFULLY logged in");

        this.appRoutes.navigateToHome();
        console.log("User SUCCESSFULLY logged in");
      }
    });
  }

  /***** Register *****/
  userRegister(credentials: any = {}): void {
    this.resetBehaviorSubjects();
    this._ajaxService.userRegister(credentials).subscribe({
      next: (response: any): void => {
        console.log("User registration data received");
      },
      error: (error: any): void => {
        console.error("User registration failed", error);
        this.behaviorSubjects.error.next(error);
      },
      complete: (response: any): void => {
        let token: string = response;
        this._addTokenToLocalStorage(token, "IvanLuka");

        this.appRoutes.navigateToHome();
        console.log("User SUCCESSFULLY registered");
      }
    });
  }

  private _addTokenToLocalStorage(token: string, username: string): void {
    ClientStorage.localStorageUserAdd(token);
    URLParts.User = username;
  }

  public getBehaviorSubjectSuccess(): BehaviorSubject<any> { return this.behaviorSubjects?.success; }

  public getBehaviorSubjectError(): BehaviorSubject<any> { return this.behaviorSubjects?.error; }


  private resetBehaviorSubjects(properties: { successOrError: number, startValue: any } = {successOrError: 0, startValue: {}}): void {

    switch (properties.successOrError) {

      case 1:
        this.behaviorSubjects.success.complete();
        this.behaviorSubjects.success = new BehaviorSubject<typeof properties.startValue>(properties.startValue);
        break;

      case -1:
        this.behaviorSubjects.error.complete();
        this.behaviorSubjects.error = new BehaviorSubject<typeof properties.startValue>(properties.startValue);
        break;

      default:
        this.behaviorSubjects.success.complete();
        this.behaviorSubjects.success = new BehaviorSubject<typeof properties.startValue>(properties.startValue);

        this.behaviorSubjects.error.complete();
        this.behaviorSubjects.error = new BehaviorSubject<typeof properties.startValue>(properties.startValue);
    }
  }
}
