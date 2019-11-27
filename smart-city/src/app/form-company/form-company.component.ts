import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { CompanyListComponent } from '../company-list/company-list.component';
import { Company, CompanyForm } from '../model/company';
/*
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
*/


@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  requisFormControl = new FormControl('', [
    Validators.required,
  ]);

  postCodes : Array<string>;

  companyModel = {
    email : null,
    password : null,
    name :null,
    locality :null,
    postCode : null,
    street : null,
    streetNumber : null,
    phone: null,
    description : null

  }
  constructor() { }

  ngOnInit() {
  }

  addCompany() {
    console.log(this.companyModel);
  }
  



}
