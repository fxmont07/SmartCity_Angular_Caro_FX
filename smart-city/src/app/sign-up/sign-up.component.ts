import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requisFormControl = new FormControl('', [
    Validators.required,
  ]);

  email : string;
  password : string;
  name : string;
  locality : string;
  postCode : string;
  phone : string;
  description : string;


  postCodes : Array<string>;

  constructor(private serviceSignUp : SignUpService ) { 
    this.postCodes = new Array<string>();
  }

  ngOnInit() {
    this.postCodes = this.serviceSignUp.getPostCodes();
  }

  formValid() {
    return true; //TODO
  }

  addCompany() {

  }

  setEmail(event) {
    console.log(event.target.value);
  }

  setPassword(event) {

  }


  setName(event) {
  }

  setLocality(event) {

  }

  setPostCode(event) {
    console.log(event.target.textContent)
  }


}
