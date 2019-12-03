import { Component, OnInit } from '@angular/core';
import { CompanyTable } from '../model/company';
import { FormCompanyComponent } from '../form-company/form-company.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Array<CompanyTable>;
  headers: Array<string>;

  constructor(private router : Router, private route : ActivatedRoute, private serviceCompany : CompanyService) {
    this.headers = serviceCompany.getHeadersCompany();
    this.companies = serviceCompany.getCompaniesTable(); // Mieux ngInit ou ici?
  }

  ngOnInit() {

  }

  addCompany() {
    this.router.navigate(["/formcompany"]);
  }

  editCompany(company: CompanyTable){
    this.router.navigate(["/formcompany/", company.id] ); // Si cv pas cest , et pas +
  }

  deleteCompany(event) {
    this.companies = this.companies.filter(c => c.id != event.id);
    this.companies=[...this.companies];
  }

  getHeaders() {
    return this.headers;
  }
}

