import * as jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({providedIn: "root"})
export class AuthService {
  private role: string;
  private userId: number;
  private appId: string;

  public getToken(): string {
    return localStorage.getItem('Token');
  }

  public isAuthenticated(): boolean { // use dans le guard redirect vers login ou autre
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(null, token);
    return token != null;
  }

  public manageToken(token): void {
    let decoded = jwt_decode(token);
    this.role = decoded['Role'];
    this.appId = decoded['AppId'];
    this.userId = decoded['UserId'];
  }

  public getRole(): string {
    return this.role;
  }
  
  public getUserId(): number {
    return this.userId;
  }

  logOut() {
    localStorage.removeItem("Token");
    this.role =null;
    this.appId =null;
    this.userId =null;
  }
}