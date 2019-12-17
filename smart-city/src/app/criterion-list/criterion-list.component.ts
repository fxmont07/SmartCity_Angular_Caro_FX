import { Component, OnInit } from '@angular/core';
import { CriterionTable } from '../model/criterion';
import { Router, ActivatedRoute } from '@angular/router';
import { CriterionDTO } from '../api/models';
import { CriterionService } from '../api/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-criterion-list',
  templateUrl: './criterion-list.component.html',
  styleUrls: ['./criterion-list.component.css']
})

export class CriterionListComponent implements OnInit {
  criterions: Array<CriterionDTO>;
  headers: Array<string>;

  constructor(private router: Router,
    private criterionService: CriterionService) {
    this.headers = new Array<string>();
    this.criterions = new Array<CriterionDTO>();
  }

  ngOnInit() {
    this.headers = this.getHeaders();
   /*  this.getAllCriterion()
      .subscribe(
        data => this.criterions = data
      ); */
  }

  addCriterion(): void {
    this.router.navigate(["/formcriterion"]);
  }

  editCriterion(criterion: CriterionTable): void {
    this.router.navigate(["/formcriterion/", criterion.id]);
  }

  /* deleteCriterion(event: CriterionDTO): void {
    this.criterionService.deleteCriterion(event)
      .subscribe(() => {
        this.criterions = this.criterions.filter(c => c.id != event.id);
        this.criterions = [...this.criterions];
      });
  } */

  /* getAllCriterion(): Observable<CriterionDTO[]> {
    return this.criterionService.getCriterion();
  } */

  getHeaders(): Array<string> {
    return ["id", "description", "sectionId"]; // TODO: "section"
  }
}
