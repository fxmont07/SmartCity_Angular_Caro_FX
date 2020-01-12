import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OfferDTO, Offer } from '../api/models';
import { OfferService } from '../api/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  
  offers : Array<OfferDTO>;
  headers: Array<string>;
  
  constructor(private router : Router, private offerService: OfferService) { 
    this.headers = new Array<string>();
    this.offers = new Array<OfferDTO>();
  }

  ngOnInit() {
    this.headers = this.getHeaders();
    this.getAllOffer().subscribe(
      data => {
        this.offers = data;
      }
    );
  }

  getHeaders(): string[] {
    return ["id", "titleJob", "description", "other", "address", "company", "section"];
  }

  getAllOffer() : Observable<OfferDTO[]>{
    return this.offerService.getOffer();
  }

  deleteOffer(event : OfferDTO){ 
    this.offerService.deleteOffer(event).subscribe(
      () => {
        this.offers = this.offers.filter(offer => offer.id != event.id);
      }
    );
  }

  editOffer(event : OfferDTO){
    this.router.navigate(["/formoffer" , event.id]);
  }

  addOffer(){

  }
}
