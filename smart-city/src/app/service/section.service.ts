import { Injectable } from '@angular/core';
import { SectionForm, SectionTable } from '../model/section';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  sectionsTable = new Array<SectionTable>();
  headersSection = new  Array<string>();

  
  constructor(private http: HttpClient) { }

  addSection() {

  }

  updateSection() {

  }

  getHeaderSection() {
    return this.headersSection;
  }
}
