import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CriterionDTO } from '../api/models';
import { CriterionService } from '../api/services';



@Injectable({
    providedIn: 'root'
})

export class CriterionResolver implements Resolve<CriterionDTO> {

  constructor(
    private criterionService: CriterionService,
    private router: Router
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.criterionService.getCriterionId(route.params.id)
      .pipe(
        catchError(err =>  this.router.navigateByUrl('/criterions'))
      );
  }
}
