import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentService } from './service/student.service';
import { StudentForm } from './model/student';

@Injectable({
    providedIn: 'root'
})

export class StudentResolver implements Resolve<StudentForm> {
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.studentService.getStudentWithId(route.params.id)
      .pipe(
        catchError(err => this.router.navigateByUrl('/students'))
      );
  }
}
