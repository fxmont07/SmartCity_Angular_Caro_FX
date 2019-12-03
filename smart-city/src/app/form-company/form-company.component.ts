import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CompanyForm } from '../model/company';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {
  //TODO: regardé si il faut modifier le form car email et mdp peut etre modifier ?
  form: FormGroup;
  postCodes: Array<string>;
  companyModel: CompanyForm;
  isACreation : boolean;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
  this.route.data
      .subscribe((data: {company: CompanyForm}) => {
        console.log(data);
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
      }),
      phone: new FormControl(''),
      description: new FormControl('')
    });
  }

  updateCompany() {
    const companyUpdated = this.form.value;
    console.log(companyUpdated);
    if(this.isACreation) {
      //this.companyService.addCompany(companyUpdated);
    } else {
      //this.companyService.update(companyUpdated)
    }
  }
}
