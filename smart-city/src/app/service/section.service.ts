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
  private apiBaseUrl : string = "https://api20191130111944.azurewebsites.net"
  
  constructor(private http: HttpClient) { }

  addSection() {

  }

  updateSection() {

  }

  getHeaderSection() {
    return this.headersSection;
  }

  getSectionTable() : Observable<SectionTable[]>{
   // return this.sectionsTable;
    return this.http.get<SectionTable[]>(`${this.apiBaseUrl}/Section`);
  }

  swat() {
   
  }
}
