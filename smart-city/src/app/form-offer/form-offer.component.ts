import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectionDTO, CompanyTable } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService, SectionService, CompanyService } from '../api/services';

@Component({
  selector: 'app-form-offer',
  templateUrl: './form-offer.component.html',
  styleUrls: ['./form-offer.component.css']
})
export class FormOfferComponent implements OnInit {
  form: FormGroup;
  offerModel: any; //TODO: soucis avec le OfferForm pas de champs Address
  isACreation: boolean;
  sections: Array<SectionDTO>;
  companies: Array<CompanyTable>;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private sectionService: SectionService,
    private companyService : CompanyService,
    private router: Router) {

    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { offer: any }) => {

        if (data.offer != undefined) {
          this.offerModel = data.offer;
          
          this.form.patchValue(this.offerModel);
          this.form.get('addressDTO').patchValue(this.offerModel.address);
          this.isACreation = false;
        }
      });
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
      company : new FormControl('',
        [
          Validators.required,
        ]),
    });
  }

  updateOffer() {
    let offerUpdated = this.form.value;
    
    offerUpdated.Address = offerUpdated.addressDTO;
    
    if (this.isACreation) {
      offerUpdated.companyId = offerUpdated.company.id;
      offerUpdated.sectionId = offerUpdated.section.id;
      this.offerService
        .postOffer(offerUpdated)
        .subscribe(() => this.router.navigate(["/companyoffer"]));
    } else {
      offerUpdated.id = this.offerModel.id;
      offerUpdated.companyId = this.offerModel.companyId;
      offerUpdated.sectionId = this.offerModel.sectionId;
      this.offerService
        .putOffer(offerUpdated)
        .subscribe(() => this.router.navigate(["/companyoffer"]))
    }
  }
}
