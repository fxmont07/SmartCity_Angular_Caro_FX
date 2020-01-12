import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectionDTO, CompanyTable } from '../api/models';
import { Router } from '@angular/router';
import { OfferService, SectionService, CompanyService } from '../api/services';

@Component({
  selector: 'app-form-offer-company',
  templateUrl: './form-offer-company.component.html',
  styleUrls: ['./form-offer-company.component.css']
})
export class FormOfferCompanyComponent implements OnInit {

  form: FormGroup;
  offerModel: any; //TODO: soucis avec le OfferForm pas de champs Address
  sections: Array<SectionDTO>;
  companies: Array<CompanyTable>;

  constructor(
    private offerService: OfferService,
    private sectionService: SectionService,
    private companyService : CompanyService,
    private router: Router) {

    this.form = this.createFormGroup();
  }

  ngOnInit() {
      this.getAllSections();
      this.getAllCompanies();
  }

  getAllCompanies(): void{
    this.companyService
        .getCompany()
        .subscribe((data) => this.companies = data);
  }

  getAllSections(): void {
    this.sectionService
      .getSection()
      .subscribe((data) => this.sections = data);
  }

  createFormGroup() {
    return new FormGroup({
      titleJob: new FormControl('',
        [
          Validators.required,
        ]
      ),
      description: new FormControl('',
        [
          Validators.required
        ]
      ),
      other: new FormControl(''),
      addressDTO: new FormGroup({
        street: new FormControl(''),
        number: new FormControl(''),
        locality: new FormControl(''), //TODO: vérif si obligatoire
        postCode: new FormControl(''),
        country: new FormControl(''),
      }),
      section: new FormControl('',
        [
          Validators.required,
        ]),
    });
  }

  updateOffer() {
    let offerUpdated = this.form.value;
    
    offerUpdated.Address = offerUpdated.addressDTO;
    offerUpdated.companyId = offerUpdated.company.id;//TODO prendre l'id de la company
    offerUpdated.sectionId = offerUpdated.section.id;
    this.offerService
      .postOffer(offerUpdated)
      .subscribe(() => this.router.navigate(["/companyoffer"]));
  
  }

}
