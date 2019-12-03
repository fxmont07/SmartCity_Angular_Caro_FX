import { Component, OnInit } from '@angular/core';
import { CriterionTable } from '../model/criterion';
import { Router, ActivatedRoute } from '@angular/router';
import { CriterionService } from '../service/criterion.service';

@Component({
  selector: 'app-criterion-list',
  templateUrl: './criterion-list.component.html',
  styleUrls: ['./criterion-list.component.css']
})

export class CriterionListComponent implements OnInit {
  criterions: Array<CriterionTable>;
  headers: Array<string>;
  constructor(private router : Router, private route : ActivatedRoute, private criterionService : CriterionService) { 
    this.headers = criterionService.getHeadersCriterion();
    this.criterions = criterionService.getCriterionsTable(); 
  }

  ngOnInit() {
  }

  addCriterion() {
    this.router.navigate(["/formcriterion"]);
  }

  editCriterion(criterion: CriterionTable){
    this.router.navigate(["/formcriterion/", criterion.id] ); // Si cv pas cest , et pas +
  }

  deleteCriterion(event) {
    this.criterions = this.criterions.filter(c => c.id != event.id);
    this.criterions=[...this.criterions];
  }

}
