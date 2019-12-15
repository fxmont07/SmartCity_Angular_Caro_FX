import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OfferForm } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from '../api/services';

@Component({
  selector: 'app-form-offer',
  templateUrl: './form-offer.component.html',
  styleUrls: ['./form-offer.component.css']
})
export class FormOfferComponent implements OnInit {
  form: FormGroup;
  offerModel: any; //TODO: soucis avec le OfferForm pas de champs Address
  isACreation: boolean;
  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private router: Router) {

    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { offer: any }) => {
        console.log(data.offer);
        if (data.offer != undefined) {
          this.offerModel = data.offer;
          console.log(this.offerModel);
          this.form.patchValue(this.offerModel);
          this.form.get('addressDTO').patchValue(this.offerModel.address)
          this.isACreation = false;
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
      })
    });
  }

  updateOffer() {
    let offerUpdated = this.form.value;
    console.log(offerUpdated);
    if (this.isACreation) {
      this.offerService
        .postOffer(offerUpdated)
        .subscribe(() => this.router.navigate(["/companyoffer"]));
    } else {
      offerUpdated.id = this.offerModel.id;
      this.offerService
        .putOffer(offerUpdated)
        .subscribe(() => this.router.navigate(["/companyoffer"]))
    }
  }
}
