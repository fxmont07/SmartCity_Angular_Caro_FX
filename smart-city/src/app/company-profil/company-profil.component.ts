import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../api/services';
import { CompanyEditForm } from '../api/models';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-company-profil',
  templateUrl: './company-profil.component.html',
  styleUrls: ['./company-profil.component.css']
})
export class CompanyProfilComponent implements OnInit {
  form: FormGroup;
  companyMode: CompanyEditForm;

  constructor(
    private companyService : CompanyService,
    private authService: AuthService) {

      this.form = this.createFormGroup();
     }

  ngOnInit() {
    console.log(this.authService.getUserId())
    this.companyService.getCompanyCompanyId(
      this.authService.getUserId())
      .subscribe(data => console.log(data));
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
  }
}
