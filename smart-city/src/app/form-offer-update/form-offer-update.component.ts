import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService, SectionService, CompanyService } from '../api/services';

@Component({
  selector: 'app-form-offer-update',
  templateUrl: './form-offer-update.component.html',
  styleUrls: ['./form-offer-update.component.css']
})
export class FormOfferUpdateComponent implements OnInit {

  form: FormGroup;
  offerModel: any; //TODO: soucis avec le OfferForm pas de champs Address

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private router: Router) {

    this.form = this.createFormGroup();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { offer: any }) => {

        if (data.offer != undefined) {
          this.offerModel = data.offer;

          this.form.patchValue(this.offerModel);
          this.form.get('addressDTO').patchValue(this.offerModel.address);
        }
      });
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
    });
  }

  updateOffer() {
    let offerUpdated = this.form.value;

    offerUpdated.Address = offerUpdated.addressDTO;

    offerUpdated.id = this.offerModel.id;
    offerUpdated.companyId = this.offerModel.companyId;
    offerUpdated.sectionId = this.offerModel.sectionId;
    this.offerService
      .putOffer(offerUpdated)
      .subscribe(() => this.router.navigate(["/companyoffer"]))

  }


}
