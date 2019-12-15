import { Component, OnInit } from '@angular/core';

import { FormCompanyComponent } from '../form-company/form-company.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../api/services';
import { VirtualTimeScheduler, Observable } from 'rxjs';
import { CompanyTable } from '../api/models';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Array<CompanyTable>;
  headers: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute, private serviceCompany: CompanyService) {
    this.headers = new Array<string>();
    this.companies = new Array<CompanyTable>();
  }

  ngOnInit() {
    this.headers = this.getHeaders();
    this.getAllCompanies().subscribe(
      data => {
        this.companies = data
      }
    )
  }

  addCompany() {
    this.router.navigate(["/formcompany"]);
  }

  editCompany(company: CompanyTable) {
    this.router.navigate(["/formcompany/", company.id]);
  }

  deleteCompany(event: CompanyTable) {
    this.serviceCompany.deleteCompany(event).
        subscribe(() => {
          this.companies = this.companies.filter(c => c.id != event.id);
          this.companies = [...this.companies];
        })
  }

  getAllCompanies(): Observable<CompanyTable[]> {
    return this.serviceCompany.getCompany();
  }

  getHeaders(): Array<string> {
    return ["id", "name", "email", "description"];
  }

}

