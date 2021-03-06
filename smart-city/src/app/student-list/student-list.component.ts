import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../api/services';
import { Observable } from 'rxjs';
import { StudentTable } from '../api/models';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Array<StudentTable>;
  headers: Array<string>;

  constructor(
    private router : Router,
    private studentService : StudentService) { 
      this.headers = new Array<string>();
      this.students = new Array<StudentTable>();
    }

  ngOnInit() {
    this.headers = this.getHeaders();
    this.getAllStudent().subscribe(
      data => {
        this.students = data;
      }
    );
  }

  addStudent () {
    this.router.navigate(["/formstudent"]);
  }

  editStudent(student: StudentTable){
    this.router.navigate(["/formstudentupdate/", student.id] );
  }

  deleteStudent(event) {
    this.studentService.deleteStudent(event)
      .subscribe(() => {
        this.students = this.students.filter(c => c.id != event.id);
        this.students = [...this.students];
      });
  }

  getHeaders(): Array<string> {
    return ["id", "lastName","firstName","email"];
  }

  getAllStudent(): Observable<StudentTable[]> {
    return this.studentService.getStudent();
  }
}
