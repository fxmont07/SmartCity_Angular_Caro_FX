import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  postCodes : Array<string>;
  constructor() { 
    this.postCodes = new Array<string>();
    this.postCodes.push("6000","5000");
  }

  getPostCodes() {
    return this.postCodes;
  }
}
