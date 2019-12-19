
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('Token');
  }

  public isAuthenticated(): boolean { // use dans le guard redirect vers login ou autre
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(null, token);
    return true;
  }
}