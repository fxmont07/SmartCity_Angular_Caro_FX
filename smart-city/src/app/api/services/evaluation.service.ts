/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Evaluation } from '../models/evaluation';
import { Company } from '../models/company';
@Injectable({
  providedIn: 'root',
})
class EvaluationService extends __BaseService {
  static readonly getEvaluationPath = '/Evaluation';
  static readonly postEvaluationPath = '/Evaluation';
  static readonly deleteEvaluationPath = '/Evaluation';
  static readonly getEvaluationCompanyIdPath = '/Evaluation/{companyId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getEvaluationResponse(): __Observable<__StrictHttpResponse<Array<Evaluation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Evaluation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Evaluation>>;
      })
    );
  }
  /**
   * @return Success
   */
  getEvaluation(): __Observable<Array<Evaluation>> {
    return this.getEvaluationResponse().pipe(
      __map(_r => _r.body as Array<Evaluation>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postEvaluationResponse(body?: Evaluation): __Observable<__StrictHttpResponse<Company>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Evaluation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Company>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postEvaluation(body?: Evaluation): __Observable<Company> {
    return this.postEvaluationResponse(body).pipe(
      __map(_r => _r.body as Company)
    );
  }

  /**
   * @param body undefined
   */
  deleteEvaluationResponse(body?: Evaluation): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Evaluation`,
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
  deleteEvaluation(body?: Evaluation): __Observable<null> {
    return this.deleteEvaluationResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param companyId undefined
   * @return Success
   */
  getEvaluationCompanyIdResponse(companyId: number): __Observable<__StrictHttpResponse<Evaluation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Evaluation/${companyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Evaluation>;
      })
    );
  }
  /**
   * @param companyId undefined
   * @return Success
   */
  getEvaluationCompanyId(companyId: number): __Observable<Evaluation> {
    return this.getEvaluationCompanyIdResponse(companyId).pipe(
      __map(_r => _r.body as Evaluation)
    );
  }
}

module EvaluationService {
}

export { EvaluationService }
