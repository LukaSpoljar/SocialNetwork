import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ClientStorage} from "../../Classes/Client Storage/ClientStorage";
import {URLParts} from "../../Classes/Hardcoded/Hardcoded";

@Injectable({
  providedIn: 'root'
})
export class AppRoutesService {

  constructor(private _router: Router) {
  }

  verifyUser(): void {
    if (ClientStorage.getUsernameFromToken()) {
    } else { this.navigateToLogin(); }
  }

  /***** Instagram Login *****/
  navigateToLogin(): void {
    if (this._router) { this._router.navigate([URLParts.Auth, `Login`]).then((r: boolean): void => {});}
  }

  /***** Instagram Register *****/
  navigateToRegistration(): void {
    if (this._router) { this._router.navigate([URLParts.Auth, `Register`]).then((r: boolean): void => {});
    }
  }

  /***** Instagram Home *****/
  navigateToHome(): void {
    if (this._router && this.isURLSegmentContained([URLParts.User])) {
      this._router.navigate([URLParts.User]).then((r: boolean): void => {
      });
    } else {
      this.navigateToLogin();
    }
  }

  /***** Instagram Profile *****/
  navigateToProfile(): void {
    if (this._router && this.isURLSegmentContained([URLParts.User])) {
      this._router.navigate([URLParts.User, `Profile`]).then((r: boolean): void => {
      });
    } else {
      this.navigateToLogin()
    }
  }

  /***** Instagram Admin *****/
  navigateToAdmin(): void {
    if (this._router && this.isURLSegmentContained([URLParts.User])) {
      this._router.navigate([URLParts.User, `Admin`]).then((r: boolean): void => {});
    } else {
      this.navigateToLogin()
    }
  }

  public isURLSegmentContained(queryArray: string[]): boolean {
    let fullPathname: string = window.location.pathname;
    let newURLSegment: string = '';

    queryArray.forEach((element: string, index: number): void => {
      newURLSegment = fullPathname.charAt(0) + element;
    });
    return fullPathname.includes(newURLSegment);
  }


  public getURLSegments(): string[] {
    let pathname: string = window.location.pathname;
    let separatorSymbol: string = pathname.charAt(0);
    return pathname.split(separatorSymbol);
  }
}
