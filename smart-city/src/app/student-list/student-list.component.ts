import { Component, OnInit } from '@angular/core';
import { StudentTable } from '../model/student';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';

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
    private route : ActivatedRoute, 
    private studentService : StudentService) { 
      this.headers = studentService.getHeadersStudent();
      this.students = studentService.getStudentsTable();
    }

  ngOnInit() {
  }

  addStudent () {
    this.router.navigate(["/formstudent"]);
  }

  
  editStudent(student: StudentTable){
    this.router.navigate(["/formstudent/", student.id] );
  }

  deleteStudent(event) {
    //TODO: envoyé au service
    this.students = this.students.filter(c => c.id != event.id);
    this.students = [...this.students];
  }

}
