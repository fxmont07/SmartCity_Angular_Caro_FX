import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentDTO, SectionDTO, StudentForm, StudentEditForm } from '../api/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService, SectionService } from '../api/services';

@Component({
  selector: 'app-form-student-update',
  templateUrl: './form-student-update.component.html',
  styleUrls: ['./form-student-update.component.css']
})
export class FormStudentUpdateComponent implements OnInit {
  form: FormGroup;
  studentModel: StudentEditForm;
  sections: Array<SectionDTO>

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private sectionService: SectionService,
    private router: Router,
  ) {
    this.form = this.createFormGroup();
  }
  ngOnInit() {
    this.route.data
    .subscribe((data: { student: StudentEditForm }) => {
      if (data.student != undefined) {
        this.studentModel = data.student;
        this.form.patchValue(this.studentModel);
      }
    });
  this.getAllSections();
  }

  createFormGroup() {
    return new FormGroup({
      lastName: new FormControl('',
        [
          Validators.required,
        ]
      ),
      firstName: new FormControl('',
        [
          Validators.required,
        ]
      ),
      address: new FormGroup({
        locality: new FormControl('', [
          Validators.required]),
        postCode: new FormControl('', [
          Validators.required
        ]),
        street: new FormControl(''),
        streetNumber: new FormControl(''),
        country: new FormControl('', [
          Validators.required
        ]),
      }),
      section: new FormControl('',
        [
          Validators.required,
        ]),

    });
  }

  getAllSections(): void {
    this.sectionService
      .getSection()
      .subscribe((data) => this.sections = data);
  }

  updateStudent(): void {
      let studentUpdated: StudentEditForm = this.form.value;
      
      studentUpdated.id = this.studentModel.id;
      studentUpdated.section = studentUpdated.section['name'];
      studentUpdated.rowVersion = this.studentModel.rowVersion;

      this.studentService
        .putStudent(studentUpdated)
        .subscribe(() =>
          this.router.navigate(["/students"])
        );
    }
  
}
