import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../api/services';

@Component({
  selector: 'app-company-profil',
  templateUrl: './company-profil.component.html',
  styleUrls: ['./company-profil.component.css']
})
export class CompanyProfilComponent implements OnInit {
  form: FormGroup;

  constructor(
    private companyService : CompanyService) {

      this.form = this.createFormGroup();
     }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
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
  }
}
