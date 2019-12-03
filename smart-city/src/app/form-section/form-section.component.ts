import { Component, OnInit } from '@angular/core';
import { SectionForm } from '../model/section';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { SectionService } from '../service/section.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  form: FormGroup;
  sectionModel: SectionForm;
  isACreation: boolean;

  constructor(private sectionService : SectionService) { 
    this.form = this.createFormGroup();
  }

  ngOnInit() {
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

  updateSection() {
    const sectionUpdated = this.form.value;
    if(this.isACreation) {
      this.sectionService.addSection();
    } else {
      this.sectionService.updateSection();
    }
  }
}
