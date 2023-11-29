import {jwtDecode} from "jwt-decode";

export class ClientStorage {

  private static readonly tokenKey: string = "token";

  public static localStorageUserAdd(tokenValue: string | null = null): void {
    if (tokenValue) {
      localStorage.setItem(this.tokenKey, tokenValue);
      console.log("User token is stored in LOCAL STORAGE");
    }
  }

  public static getUsernameFromToken(): any | null {
    return decodeToken(this.getLocalStorageToken());

    function decodeToken(token: string | null) {
      let decodedTokenObject: any = null;

      try { decodedTokenObject = jwtDecode(token || '', {header: true}); }
      catch (error) { console.dir(error); }

      return decodedTokenObject;
    }
  }

  public static getLocalStorageToken(): string | null { return localStorage.getItem(this.tokenKey); }

  public static localStorageUserRemove(): void { localStorage.removeItem(this.tokenKey); }
}
