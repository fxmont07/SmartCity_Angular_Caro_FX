import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CriterionDTO, SectionDTO } from '../api/models';
import { CriterionService, SectionService } from '../api/services';

@Component({
  selector: 'app-form-criterion',
  templateUrl: './form-criterion.component.html',
  styleUrls: ['./form-criterion.component.css']
})
export class FormCriterionComponent implements OnInit {

  form: FormGroup;
  criterionModel: CriterionDTO;
  isACreation: boolean;
  sections: Array<SectionDTO>

  constructor(
    private route: ActivatedRoute,
    private criterionService: CriterionService,
    private sectionService: SectionService,
    private router: Router) {

    this.form = this.createFormGroup();
    this.isACreation = true;
    this.sections = new Array<SectionDTO>();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { criterion: CriterionDTO }) => {
        if (data.criterion != undefined) {
          this.criterionModel = data.criterion;
          this.form.patchValue(this.criterionModel);
          this.isACreation = false;
        }
      });
    this.getAllSections();
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

  updateCriterion() {
    let criterionUpdated = this.form.value;
    if (this.isACreation) {
      this.criterionService
        .postCriterion(criterionUpdated)
        .subscribe(() => this.router.navigate(["/criterions"]));
    } else {
      criterionUpdated.id = this.criterionModel.id;
      criterionUpdated.rowVersion = this.criterionModel.rowVersion;
      this.criterionService
        .putCriterion(criterionUpdated)
        .subscribe(() => this.router.navigate(["/criterions"]))
    }
  }

  getAllSections() {
    this.sectionService
      .getSection()
      .subscribe((data) => this.sections = data);
  }


}
