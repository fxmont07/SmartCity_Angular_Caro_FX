import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CompanyService } from '../service/company.service';
import { CompanyForm } from '../model/company';


@Injectable({
    providedIn: 'root'
})

export class CompanyResolver implements Resolve<CompanyForm> {
  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.companyService.getCompanyWithId(route.params.id)
      .pipe(
        catchError(err => this.router.navigateByUrl('/companies'))
      );
  }
}
