/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompanyTable } from '../models/company-table';
import { CompanyForm } from '../models/company-form';
import { Company } from '../models/company';
@Injectable({
  providedIn: 'root',
})
class CompanyService extends __BaseService {
  static readonly getCompanyPath = '/Company';
  static readonly postCompanyPath = '/Company';
  static readonly deleteCompanyPath = '/Company';
  static readonly getCompanyCompanyIdPath = '/Company/{companyId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getCompanyResponse(): __Observable<__StrictHttpResponse<Array<CompanyTable>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompanyTable>>;
      })
    );
  }
  /**
   * @return Success
   */
  getCompany(): __Observable<Array<CompanyTable>> {
    return this.getCompanyResponse().pipe(
      __map(_r => _r.body as Array<CompanyTable>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postCompanyResponse(body?: CompanyForm): __Observable<__StrictHttpResponse<CompanyForm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyForm>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postCompany(body?: CompanyForm): __Observable<CompanyForm> {
    return this.postCompanyResponse(body).pipe(
      __map(_r => _r.body as CompanyForm)
    );
  }

  /**
   * @param body undefined
   */
  deleteCompanyResponse(body?: Company): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Company`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  deleteCompany(body?: Company): __Observable<null> {
    return this.deleteCompanyResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param companyId undefined
   * @return Success
   */
  getCompanyCompanyIdResponse(companyId: number): __Observable<__StrictHttpResponse<CompanyForm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Company/${companyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyForm>;
      })
    );
  }
  /**
   * @param companyId undefined
   * @return Success
   */
  getCompanyCompanyId(companyId: number): __Observable<CompanyForm> {
    return this.getCompanyCompanyIdResponse(companyId).pipe(
      __map(_r => _r.body as CompanyForm)
    );
  }
}

module CompanyService {
}

export { CompanyService }
