import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CompanyForm, CompanyTable } from '../model/company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../api/services';


@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  
  form: FormGroup;
  companyModel: CompanyTable;
  isACreation : boolean;

  constructor(
    private route: ActivatedRoute,
    private companyService : CompanyService) {

    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: {company: CompanyTable}) => {
        if(data.company != undefined) {
          this.companyModel = data.company;
          console.log(this.companyModel);
          this.form.patchValue(this.companyModel);
          this.isACreation = false;
        } 
      });
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
        country: new FormControl('', Validators.required)
      }),
      phone: new FormControl(''),
      description: new FormControl('')
    });
  }

  updateCompany() {
    const companyUpdated = this.form.value;
    console.log(companyUpdated);
    if(this.isACreation) {
      console.log("coucou")
      this.companyService.postCompanyAdd(companyUpdated);
    } else {
      //this.companyService.update(companyUpdated)
    }
  }
}
