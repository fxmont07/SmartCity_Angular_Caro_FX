import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student, SectionDTO, StudentDTO, StudentForm } from '../api/models';
import { SectionService, StudentService } from '../api/services';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  form: FormGroup;
  studentModel: StudentDTO;
  isACreation: boolean;
  sections: Array<SectionDTO>

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private sectionService: SectionService,
    private router: Router,
  ) {
    this.isACreation = true;
    this.form = this.createFormGroup();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { student: StudentDTO }) => {
        if (data.student != undefined) {
          this.studentModel = data.student;
          this.form.patchValue(this.studentModel);
          this.isACreation = false;
        }
      });
    this.getAllSections();
  }

  addStudent() { }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      //password: new FormControl('',),
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
        locality: new FormControl(''),
        postCode: new FormControl(''),
        street: new FormControl(''),
        streetNumber: new FormControl(''),
      }),
      //phoneNumber: new FormControl(''),
      section: new FormControl('',
        [
          Validators.required,
        ]),
      secretQuestion: new FormControl(''),
      answerSecret: new FormControl(''),
    });
  }

  getAllSections(): void {
    this.sectionService
      .getSection()
      .subscribe((data) => this.sections = data);
  }

  updateStudent(): void {
    console.log("clic")
    let studentUpdated: StudentForm = this.form.value;
    if (this.isACreation) {
      this.studentService
        .postStudent(studentUpdated)
        .subscribe(() =>
          this.router.navigate(["/students"])
        );
    } else {
      /* sectionUpdated.id = this.sectionModel.id; //TODO: soucis api sectionId
      this.sectionService.putSection(sectionUpdated)
        .subscribe(() => this.router.navigate(["/sections"])); */
    }
  }
}
