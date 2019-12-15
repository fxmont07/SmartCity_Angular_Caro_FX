import { Injectable } from '@angular/core';
import { CompanyTable, CompanyForm } from '../model/company';
import { Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companiesTable = new Array<CompanyTable>();
  headersCompany = new  Array<string>();
  company : CompanyForm;

  constructor(private http: HttpClient) {
    this.headersCompany.push("id");
    this.headersCompany.push("name");
    this.headersCompany.push("email");
    this.headersCompany.push("locality");

    this.companiesTable.push({
      id: 1,
      name: "Test1",
      email: "rere",
      locality: "adr"
    });
    this.companiesTable.push({
      id: 2,
      name: "Test1",
      email: "rere",
      locality: "adr"
    });
    this.companiesTable.push({
      id: 3,
      name: "Test1",
      email: "rere",
      locality: "adr"
    });
    this.companiesTable.push({
      id: 4,
      name: "Test1",
      email: "rere",
      locality: "adr"
    });
  }

  getCompanyWithId(id : number): Observable<CompanyForm>{
    if(!id) {
      return;
    }

    const company = this.companiesTable[id-1];
    return of({name: company.name, email: company.email, address: {locality: company.locality } } as CompanyForm);
  }



  getHeadersCompany() {
    return this.headersCompany;
  }

  getCompaniesTable() {
    return this.companiesTable;
  }

  // getCompaniesTable() : Observable<CompanyTable>{
  //   return this.http.get<CompanyTable>(`${this.apiBaseUrl}\/company`);
  // }
}
