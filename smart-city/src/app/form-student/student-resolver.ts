import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentDTO } from '../api/models';
import { StudentService } from '../api/services';


@Injectable({
    providedIn: 'root'
})

export class StudentResolver implements Resolve<StudentDTO> {
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.studentService.getStudentStudentId(route.params.id)
      .pipe(
        catchError(err => this.router.navigateByUrl('/students'))
      );
  }
}
