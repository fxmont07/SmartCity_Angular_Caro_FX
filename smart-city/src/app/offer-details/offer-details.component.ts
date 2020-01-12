import { Component, OnInit } from '@angular/core';
import { OfferService } from '../service/offer.service';
import { CriterionService } from '../service/criterion.service';
import { MatRadioGroup } from '@angular/material/radio';
import { CriterionTable, CriterionTableValue } from '../model/criterion';



@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  constructor(private offerService: OfferService, private criterionService: CriterionService) { }

  ngOnInit() {

  }

  getCriterionsValue() {
    return this.criterionService.getCriterionsTableValue();
  }

  getHeadersCriterionValue() {
    return this.criterionService.getHeadersCriterionValue();
  }

  setIsMandatoryWithIndex(index, value) {
    index.isMandatory = value;
  }
  
}

