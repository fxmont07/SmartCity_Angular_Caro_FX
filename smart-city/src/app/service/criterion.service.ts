import { Injectable } from '@angular/core';
import { CriterionTable, CriterionForm, CriterionTableValue } from '../model/criterion';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriterionService {
  criterionsTable = new Array<CriterionTable>();
  headersCriterion = new  Array<string>();
  criterion : CriterionForm;

  criterionsTableValue = new Array<CriterionTableValue>();
  headersCriterionValue = new Array<string>();
  

  constructor() { 
    this.headersCriterion.push("id");
    this.headersCriterion.push("description");
    this.headersCriterion.push("section");

    this.criterionsTable.push(
      {
        id: 1,
        description: "descr",
        section: "MK"
      },
      {
        id: 2,
        description: "descr",
        section: "MK"
      },
      {
        id: 3,
        description: "descr",
        section: "IG"
      }
    ); 

    this.criterionsTableValue.push(
      {
        description : "Description1", 
        isMandatory:true,
      },
      {
        description : "Description2", 
        isMandatory:true,
      },
      {
        description : "Description3", 
        isMandatory:false,
      },
    );

    this.headersCriterionValue.push(
        "Description", "Mandatory", "Forbidden"  
    );
  }

  getCriterionWithId(id : number): Observable<CriterionForm>{
    if(!id) {
      return;
    }

    const criterion = this.criterionsTable[id-1];
    return of({description: criterion.description, section: criterion.section } as CriterionForm);
  }

  getHeadersCriterion() {
    return this.headersCriterion;
  }

  getCriterionsTable() {
    return this.criterionsTable;
  }

  getAllSections() {
    return ["IG", "MK"];
  }

  getHeadersCriterionValue() {
    return this.headersCriterionValue;
  }

  getCriterionsTableValue() {
    return this.criterionsTableValue;
  }
}
