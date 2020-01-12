import * as jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { TokenDTO } from '../api/models';

@Injectable({ providedIn: "root" })
export class AuthService {
  private role: string;
  private userId: number;
  private appId: string;
  private token: TokenDTO;

  public getTokenString(): string {
    return localStorage.getItem('Token');
  }
  public getToken(): any {
    if(this.token == null) return "null";
    return JSON.parse(localStorage.getItem('Token'));
  }
  public setToken(token): void {
    localStorage.setItem("Token", JSON.stringify(token));
    this.token = token;
  }

  public isAuthenticated(): boolean { // use dans le guard redirect vers login ou autre
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    //return tokenNotExpired(null, token);
    console.log(token);
    console.log()
    console.log(token != null && token != undefined)
    return this.isCompany() || this.isAdmin();
  }

  public manageToken(token): void {
    let decoded = jwt_decode(token);
    this.role = decoded['roles'];
    this.appId = decoded['AppId'];
    this.userId = decoded['UserId'];
  }

  public getRole(): string {
    return this.role;
  }

  public getUserId(): number {
    return this.userId;
  }

  public logOut(): void {
    localStorage.removeItem("Token");
    this.role = null;
    this.appId = null;
    this.userId = null;
  }

  public isCompany(): boolean {
    return this.getRole() == "Company";
  }

  public isAdmin(): boolean {
    return this.getRole() == "Admin";
  }
}