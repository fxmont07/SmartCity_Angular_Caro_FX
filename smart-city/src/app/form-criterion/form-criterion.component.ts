import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CriterionForm } from '../model/criterion';
import { ActivatedRoute } from '@angular/router';
import { CriterionService } from '../service/criterion.service';

@Component({
  selector: 'app-form-criterion',
  templateUrl: './form-criterion.component.html',
  styleUrls: ['./form-criterion.component.css']
})
export class FormCriterionComponent implements OnInit {
  form : FormGroup;
  criterionModel : CriterionForm;
  isACreation : boolean;
  constructor(private route: ActivatedRoute, private criterionService: CriterionService) {
    this.isACreation = true;
   }

  ngOnInit() {
    this.form = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      description: new FormControl('',  
        [
        Validators.required,
        ]
      ),
      section: new FormControl('',
      [
        Validators.required
      ])
    });
  }

  getAllSections() {
    return this.criterionService.getAllSections();
  }

  updateCriterion() {
    const criterionUpdated = this.form.value;
    if(this.isACreation) {
      //this.companyService.addCompany(companyUpdated);
    } else {
      //this.companyService.update(companyUpdated)
    }
  }

  
}
