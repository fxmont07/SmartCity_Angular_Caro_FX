/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionDTO } from '../models/criterion-dto';
import { Criterion } from '../models/criterion';
@Injectable({
  providedIn: 'root',
})
class CriterionService extends __BaseService {
  static readonly getCriterionIdSectionPath = '/Criterion/{idSection}';
  static readonly postCriterionAddPath = '/Criterion/add';
  static readonly deleteCriterionPath = '/Criterion';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param idSection undefined
   * @return Success
   */
  getCriterionIdSectionResponse(idSection: number): __Observable<__StrictHttpResponse<Array<CriterionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Criterion/${idSection}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionDTO>>;
      })
    );
  }
  /**
   * @param idSection undefined
   * @return Success
   */
  getCriterionIdSection(idSection: number): __Observable<Array<CriterionDTO>> {
    return this.getCriterionIdSectionResponse(idSection).pipe(
      __map(_r => _r.body as Array<CriterionDTO>)
    );
  }

  /**
   * @param body undefined
   */
  postCriterionAddResponse(body?: Criterion): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Criterion/add`,
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
  postCriterionAdd(body?: Criterion): __Observable<null> {
    return this.postCriterionAddResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  deleteCriterionResponse(body?: Criterion): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Criterion`,
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
  deleteCriterion(body?: Criterion): __Observable<null> {
    return this.deleteCriterionResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CriterionService {
}

export { CriterionService }
