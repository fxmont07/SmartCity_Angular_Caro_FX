import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormCompanyComponent } from './form-company/form-company.component';



const routes: Routes = [
  {
    path:'welcome',
    component:LoginComponent,
  },
  {
  path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path:'signup',
    component: SignUpComponent,
  },
  {
    path : 'companies',
    component : CompanyListComponent,
  },
  {
    path : 'addcompany',
    component : FormCompanyComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    CompanyListComponent,
    LoginComponent,
    SignUpComponent,
    FormCompanyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxDatatableModule,
    RouterModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormCompanyComponent]
})
export class AppModule { }
