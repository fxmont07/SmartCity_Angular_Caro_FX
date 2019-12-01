import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentForm } from '../model/student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  form: FormGroup;
  postCodes: Array<string>;
  studentModel: StudentForm;
  sections: Array<string>;

  constructor(
    private route: ActivatedRoute, 
    private studentService: StudentService
  ) {
    this.form = this.createFormGroup();
    this.studentModel = {
      name : null, 
      address : {
        locality: null,
        postCode: null,
        street: null,
        streetNumber: null,
      }
    } as StudentForm;
   }

  ngOnInit() {
    this.route.data
    //TODO: appeler le service pour récupérer sur base de l'id le détail de la compagnie
    //this.service.getHero(params.get('id')))
    .subscribe((data: {student: StudentForm} ) => {
      this.studentModel = data.student;
      //TODO: patcher le formulaire : https://angular.io/guide/reactive-forms
      this.form.patchValue(this.studentModel);
    });
  }

  addStudent() {}

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',),
      name: new FormControl('',
        [
          Validators.required,
        ]
      ),
      firstname: new FormControl('',
      [
        Validators.required,
      ]
    ),
      address: new FormGroup({
        locality: new FormControl(''),
        postCode: new FormControl(''),
        street: new FormControl(''),
        streetNumber: new FormControl(''),
      }),
      phone: new FormControl(''),
      section: new FormControl('')
    });
  }
}
