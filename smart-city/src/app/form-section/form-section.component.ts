import { Component, OnInit } from '@angular/core';
import { SectionForm } from '../model/section';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  form : FormGroup;
  sectionModel : SectionForm;

  constructor() { 
    this.form = this.createFormGroup();
  }

  ngOnInit() {
    this.sectionModel = {
      name : null
    }
  }

  addSection() {
    console.log(this.sectionModel);
  }

  createFormGroup() {
    return new FormGroup({
      nameControl: new FormControl('',  
        [
        Validators.required,
        ]
      ),
    });
  }
}
