import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SectionDTO } from '../api/models';
import { SectionService } from '../api/services';



@Injectable({
    providedIn: 'root'
})

export class SectionResolver implements Resolve<SectionDTO> {

  constructor(
    private studentService: SectionService,
    private router: Router
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.studentService.getSectionSectionId(route.params.id)
      .pipe(
        catchError(err => this.router.navigateByUrl('/sections'))
      );
  }
}
