import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CompanyForm, CompanyEditForm } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../api/services';

@Component({
  selector: 'app-form-company-update',
  templateUrl: './form-company-update.component.html',
  styleUrls: ['./form-company-update.component.css']
})
export class FormCompanyUpdateComponent implements OnInit {

  form: FormGroup;
  companyModel: CompanyForm;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router,
  ) {

    this.form = this.createFormGroup();
  }

  ngOnInit() {
    this.form.get('isPremium').setValue(false);
    this.route.data
      .subscribe((data: { company: CompanyForm }) => {
        if (data.company != undefined) {
          this.companyModel = data.company;
          this.form.patchValue(this.companyModel);
          this.form.get('address').patchValue(this.companyModel.address);
          }
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
        locality: new FormControl('', 
        [
          Validators.required,
        ]),
        postCode: new FormControl('',
        [
          Validators.required,
        ]),
        street: new FormControl(''),
        streetNumber: new FormControl(''),
        country: new FormControl('', Validators.required)
      }),
      phone: new FormControl(''),
      isPremium: new FormControl(''),
      description: new FormControl('')
    });
  }

  updateCompany() {
      let companyUpdated: CompanyEditForm = this.form.value;
      companyUpdated.id = this.companyModel.id;
      this.companyService.putCompany(companyUpdated)
      .subscribe(() => this.router.navigate(["/companies"]));
  }

}
