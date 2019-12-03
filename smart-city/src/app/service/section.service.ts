import { Injectable } from '@angular/core';
import { SectionForm, SectionTable } from '../model/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sectionsTable = new Array<SectionTable>();
  headersSection = new  Array<string>();
  section : SectionForm;
  
  constructor() { }

  addSection() {

  }

  updateSection() {

  }

  getHeaderSection() {
    return this.headersSection;
  }

  getSectionTable() {
    return this.sectionsTable;
  }
}
