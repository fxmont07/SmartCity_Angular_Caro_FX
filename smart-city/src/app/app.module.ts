import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormCompanyComponent } from './form-company/form-company.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormSectionComponent } from './form-section/form-section.component';
import { SectionListComponent } from './section-list/section-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { CriterionListComponent } from './criterion-list/criterion-list.component';
import { FormCriterionComponent } from './form-criterion/form-criterion.component';
import { CompanyResolver } from './form-company/company-resolver';
import { StudentResolver } from './form-student/student-resolver';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { ApiModule } from './api/api.module';
import { SectionResolver } from './form-section/section-resolver';
import { CriterionResolver } from './form-criterion/criterion-resolver';
import {MatPaginatorModule} from '@angular/material/paginator';
import { from } from 'rxjs';
import { CompanyOfferComponent } from './company-offer/company-offer.component';
import { CompanyOfferDetailsComponent } from './company-offer-details/company-offer-details.component';
import { CompanyProfilComponent } from './company-profil/company-profil.component';
import { NavBarCompanyComponent } from './nav-bar-company/nav-bar-company.component';
import { FormOfferComponent } from './form-offer/form-offer.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferResolver } from './form-offer/offer-resolver';



// Lancement visual studio swagger http://localhost:49351/swagger/v1/swagger.json non sécurisé
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'companies',
    component: CompanyListComponent,
  },
  {
    path: 'sections',
    component: SectionListComponent,
  },
  {
    path: 'formcompany',
    component: FormCompanyComponent,
  },
  {
    path: 'formcompany/:id',
    component: FormCompanyComponent,
    resolve: { company: CompanyResolver }
  },
  {
    path: 'formsection',
    component: FormSectionComponent,
  },
  {
    path: 'formsection/:id',
    component: FormSectionComponent,
    resolve: { section: SectionResolver }
  },
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'formstudent',
    component: FormStudentComponent,
  },
  {
    path: 'formstudent/:id',
    component: FormStudentComponent,
    resolve: { student: StudentResolver }
  },
  {
    path: 'criterions',
    component: CriterionListComponent,
  },
  {
    path: 'formcriterion',
    component: FormCriterionComponent,
  },
  {
    path: 'formcriterion/:id',
    component: FormCriterionComponent,
    resolve: { criterion: CriterionResolver }
  },
  {
    path: 'formoffer',
    component: FormOfferComponent,
  },
  {
    path: 'formoffer/:id',
    component: FormOfferComponent,
    resolve: { offer: OfferResolver }
  },
  {
    path: 'offerdetails', // TODO: id
    component: OfferDetailsComponent,
  },
  {
    path: 'companyprofil',
    component: CompanyProfilComponent,
  },
  {
    path: 'companyoffer',
    component: CompanyOfferComponent,
  },

  



];

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    CompanyListComponent,
    LoginComponent,
    SignUpComponent,
    FormCompanyComponent,
    FormSectionComponent,
    SectionListComponent,
    StudentListComponent,
    FormStudentComponent,
    CriterionListComponent,
    FormCriterionComponent,
    NavBarComponent,
    OfferDetailsComponent,
    CompanyOfferComponent,
    CompanyOfferDetailsComponent,
    CompanyProfilComponent,
    NavBarCompanyComponent,
    FormOfferComponent,
    OfferListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:44386' }),//https://localhost:5001 https://api20191130111944.azurewebsites.net
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSelectModule,
    NgxDatatableModule,
    RouterModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormCompanyComponent]
})
export class AppModule { }
