import { Component, OnInit } from '@angular/core';
import { CriterionTable, CriterionTableValue } from '../model/criterion';
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
    this.criterionService.getCriterionPageSizeIndex({pageSize: 5, index: 0})
      .subscribe(
        data => this.criterions = data
      );
  }

  addCriterion(): void {
    this.router.navigate(["/formcriterion"]);
  }

  editCriterion(criterion: CriterionTable): void {
    this.router.navigate(["/formcriterion/", criterion.id]);
  }

  page(x) {
    this.getPageCriterion(x[0] , x[1]);
  }

  getPageCriterion(size: number, index: number) {
    this.criterionService.getCriterionPageSizeIndex({pageSize: size,index: index})
    .subscribe(data =>{
      this.criterions = [];
      this.criterions = data;
  });
  }
  //Todo: Soucis onCascade
  /* deleteCriterion(event: CriterionDTO): void {
    this.criterionService.deleteCriterion(event)
      .subscribe(() => {
        this.criterions = this.criterions.filter(c => c.id != event.id);
        this.criterions = [...this.criterions];
      });
  } */

  getHeaders(): Array<string> {
    return ["id", "description", "section"];
  }
}
