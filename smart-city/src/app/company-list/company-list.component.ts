import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { FormCompanyComponent } from '../form-company/form-company.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Array<Company>;
  headers: Array<string>;

  selectedCompany : any;
  constructor() {
    this.headers = new Array<string>();
    this.companies = new Array<Company>();
  }

  ngOnInit() {
    this.headers.push("id");
    this.headers.push("name");
    this.headers.push("email");
    this.headers.push("address");

    this.companies.push({
      id: 1,
      name: "Test1",
      email: "rere",
      address: "adr"
    });
    this.companies.push({
      id: 2,
      name: "Test1",
      email: "rere",
      address: "adr"
    });
    this.companies.push({
      id: 3,
      name: "Test1",
      email: "rere",
      address: "adr"
    });
    this.companies.push({
      id: 4,
      name: "Test1",
      email: "rere",
      address: "adr"
    });
  }

  addCompany() {
    console.log("coucou");
    this.companies.push({
      id: 25,
      name: "Test1",
      email: "rere",
      address: "adr"
    });
    this.companies=[...this.companies];
  }

  deleteCompany(event) {
    this.companies = this.companies.filter(c => c.id != event.id);
    this.companies=[...this.companies];
  }
}

