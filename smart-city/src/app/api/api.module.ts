/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AddressContollerService } from './services/address-contoller.service';
import { CompanyService } from './services/company.service';
import { CriterionService } from './services/criterion.service';
import { CriterionOfferService } from './services/criterion-offer.service';
import { CriterionStudentService } from './services/criterion-student.service';
import { EvaluationService } from './services/evaluation.service';
import { LoginService } from './services/login.service';
import { OfferService } from './services/offer.service';
import { SectionService } from './services/section.service';
import { StudentService } from './services/student.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AddressContollerService,
    CompanyService,
    CriterionService,
    CriterionOfferService,
    CriterionStudentService,
    EvaluationService,
    LoginService,
    OfferService,
    SectionService,
    StudentService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
