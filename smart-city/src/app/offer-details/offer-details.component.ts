import { Component, OnInit } from '@angular/core';
import { CriterionService } from '../service/criterion.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  constructor(private criterionService: CriterionService) { }

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

