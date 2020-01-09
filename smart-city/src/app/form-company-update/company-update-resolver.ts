import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CompanyForm } from '../model/company';

import { CompanyTable } from '../api/models';
import { CompanyService } from '../api/services';


@Injectable({
    providedIn: 'root'
})

export class CompanyUpdateResolver implements Resolve<CompanyForm> {
  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.companyService.getCompanyCompanyId(route.params.id)
      .pipe(
        catchError(err => this.router.navigateByUrl('/companies'))
      );
  }
}
