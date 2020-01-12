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
  companyModel: CompanyEditForm;

  constructor(
    private companyService : CompanyService,
    private authService: AuthService) {

      this.form = this.createFormGroup();
     }

  ngOnInit() {
    this.companyService.getCompanyCompanyId(
      this.authService.getUserId())
      .subscribe(data => {
        this.companyModel = data;
        this.form.patchValue(this.companyModel);
          this.form.get('address').patchValue(this.companyModel.address);
      });
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
