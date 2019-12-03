import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentTable, StudentForm } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsTable : Array<StudentTable>;
  private headersStudent : Array<string>;

  constructor() {
    this.studentsTable = new Array<StudentTable>();
    this.headersStudent = new  Array<string>()

    this.headersStudent.push("id");
    this.headersStudent.push("name");
    this.headersStudent.push("firstname")
    this.headersStudent.push("email");
    this.headersStudent.push("locality");

    this.studentsTable.push(
      {
        id: 1,
        name: "coucou",
        firstname: "fristname",
        email: "mail@mail.be",
        locality: "coucou"
      }
      );
   }



   getHeadersStudent() {
    return this.headersStudent;
  }

  getStudentsTable() {
    return this.studentsTable;
  }

  getStudentWithId(id: number): Observable<StudentForm>{ {
      if(!id) {
        return;
      }
      const student = this.studentsTable[id-1];
  
      return of(
        {
          name: student.name, 
          email: student.email, 
          firstname: student.firstname, 
          address: {
            locality: student.locality,  
          }, 
        } as StudentForm);
        //TODO:null all champs + propre
    }
  }
}
