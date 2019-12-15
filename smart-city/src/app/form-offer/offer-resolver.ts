import { OfferDTO, OfferForm } from '../api/models';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OfferService } from '../api/services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OfferResolver implements Resolve<OfferForm> {
    constructor(
      private offerService: OfferService,
      private router: Router
    ) { }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.offerService.getOfferIdOffer(route.params.id)
        .pipe(
          catchError(err => this.router.navigateByUrl('/companyoffer'))
        );
    }
  }