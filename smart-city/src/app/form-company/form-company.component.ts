import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../api/services';
import { CompanyForm } from '../api/models';


@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css']
})
export class FormCompanyComponent implements OnInit {

  form: FormGroup;
  companyModel: CompanyForm;
  isACreation: boolean;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router,
  ) {

    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
    this.form.get('isPremium').setValue(false);
    this.route.data
      .subscribe((data: { company: CompanyForm }) => {
        if (data.company != undefined) {
          this.companyModel = data.company;
          this.form.patchValue(this.companyModel);
          this.form.get('address').patchValue(this.companyModel.address);
          this.isACreation = false;
          console.log(this.form.value);
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
      confirmPassword : new FormControl('',
        [
          Validators.required,
          Validators.minLength(8)
        ]),


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
    let companyUpdated: CompanyForm = this.form.value;
    if (this.isACreation) {
      console.log(companyUpdated);
      this.companyService.postCompany(companyUpdated)
        .subscribe(() => {
          this.router.navigate(["/companies"]);
        });
    } 
  }

  //TODO: Verifier les 2 mdp 
  checkPassword() {
    return this.form.get("password") === this.form.get("confirmPassword");
  }
}


