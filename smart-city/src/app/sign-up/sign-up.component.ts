import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SignUpService } from '../service/sign-up.service';
import { CompanyForm } from '../model/company';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  form : FormGroup;

  postCodes: Array<string>;
  companyModel: CompanyForm;


  constructor(private serviceSignUp : SignUpService ) { 
    this.postCodes = new Array<string>();
    this.form = this.createFormGroup();
  }

  ngOnInit() {
    this.postCodes = this.serviceSignUp.getPostCodes();
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ),
      name: new FormControl('',
        [
          Validators.required,
        ]
      ),
      address: new FormGroup({
        locality: new FormControl(''),
        postCode: new FormControl(''),
        street: new FormControl(''),
        streetNumber: new FormControl(''),
      }),
      phone: new FormControl(''),
      description: new FormControl('')
    });
  }

  addCompany(){}
}
