import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SectionService } from '../api/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SectionDTO } from '../api/models';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  form: FormGroup;
  sectionModel: SectionDTO;
  isACreation: boolean;

  constructor(
    private sectionService: SectionService,
    private router: Router,
    private route: ActivatedRoute) {

    this.form = this.createFormGroup();
    this.isACreation = true;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { section: SectionDTO }) => {
        if (data.section != undefined) {
          this.sectionModel = data.section;
          this.form.patchValue(this.sectionModel);
          this.isACreation = false;
        }
      });
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('',
        [
          Validators.required,
        ]
      ),
    });
  }

  updateSection() {
    let sectionUpdated: SectionDTO = this.form.value;
    if (this.isACreation) {
      this.sectionService
        .postSection(sectionUpdated)
        .subscribe(() =>
          this.router.navigate(["/sections"])
        );
    } else {
      sectionUpdated.id = this.sectionModel.id; //TODO: soucis api sectionId
      sectionUpdated.rowVersion = this.sectionModel.rowVersion;
      this.sectionService.putSection(sectionUpdated)
        .subscribe(() => this.router.navigate(["/sections"]));
    }
  }
}
