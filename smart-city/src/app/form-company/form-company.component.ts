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

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.form = this.createFormGroup();
  }

  ngOnInit() {
  
   
  this.route.data
      //TODO: appeler le service pour récupérer sur base de l'id le détail de la compagnie
      //this.service.getHero(params.get('id')))
      .subscribe((data: {company: CompanyForm} ) => {
        console.log(data);
        if(data.company != undefined) {
          this.companyModel = data.company;
          console.log(this.companyModel);
          //TODO: patcher le formulaire : https://angular.io/guide/reactive-forms
          this.form.patchValue(this.companyModel);
        } else {
           this. companyModel = {
            name: null,
            address: {
              locality: null,
              street: null,
              streetNumber: null,
              postCode: null,
            }
          } as CompanyForm;
        }
       });
  }

  addCompany() {
    console.log(this.companyModel); //TODO: 
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
  //TODO: retirer le mot control des et faire des controle pour tous les champs pour pouvoir utilisé les lignes 83 et 49 
  updateCompany() {
    const companyUpdated= this.form.value;
    console.log(companyUpdated);
    //this.companyService.update(companyUpdated);
  }
}
