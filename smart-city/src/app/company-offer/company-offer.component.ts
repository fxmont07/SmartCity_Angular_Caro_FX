import { Component, OnInit } from '@angular/core';
import { OfferTable } from '../model/offer';
import { OfferDTO } from '../api/models';
import { Observable } from 'rxjs';
import { OfferService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-offer',
  templateUrl: './company-offer.component.html',
  styleUrls: ['./company-offer.component.css']
})
export class CompanyOfferComponent implements OnInit {
  companyOffers : Array<OfferDTO>;
  headers: Array<string>;
  
  constructor(
    private offerService: OfferService,
    private router: Router
  ) { }

  ngOnInit() {
    this.headers = this.getHeaders();
    this.getAllCompanies().subscribe(
      data => {
        this.companyOffers = data
      }
    )
  }

  addCompanyOffer() {
    this.router.navigate(["/formoffer"]);
  }

  editCompanyOffer(offer: OfferDTO) {
    this.router.navigate(["/formoffer/", offer.id]);
  }

  deleteCompanyOffer(event: OfferDTO) {
    this.offerService.deleteOffer(event).
        subscribe(() => {
          this.companyOffers = this.companyOffers.filter(c => c.id != event.id);
          this.companyOffers = [...this.companyOffers];
        })

  }

  getAllCompanies(): Observable<OfferDTO[]> {
    return this.offerService.getOffer();
  }

  getHeaders(): Array<string> {
    return ["id", "titleJob", "description", "other", "addressId", "companyId", "sectionid"]; // Todo plus les id mais les string
  }
}
