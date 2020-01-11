/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionDTO } from '../models/criterion-dto';
@Injectable({
  providedIn: 'root',
})
class CriterionService extends __BaseService {
  static readonly getCriterionPageSizeIndexPath = '/Criterion/{pageSize}/{index}';
  static readonly getCriterionIdPath = '/Criterion/{id}';
  static readonly getCriterionBySectionIdSectionPath = '/Criterion/BySection/{idSection}';
  static readonly postCriterionPath = '/Criterion';
  static readonly putCriterionPath = '/Criterion';
  static readonly deleteCriterionPath = '/Criterion';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `CriterionService.GetCriterionPageSizeIndexParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getCriterionPageSizeIndexResponse(params: CriterionService.GetCriterionPageSizeIndexParams): __Observable<__StrictHttpResponse<Array<CriterionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Criterion/${params.pageSize}/${params.index}`,
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
   * @param params The `CriterionService.GetCriterionPageSizeIndexParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getCriterionPageSizeIndex(params: CriterionService.GetCriterionPageSizeIndexParams): __Observable<Array<CriterionDTO>> {
    return this.getCriterionPageSizeIndexResponse(params).pipe(
      __map(_r => _r.body as Array<CriterionDTO>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getCriterionIdResponse(id: number): __Observable<__StrictHttpResponse<CriterionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Criterion/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getCriterionId(id: number): __Observable<CriterionDTO> {
    return this.getCriterionIdResponse(id).pipe(
      __map(_r => _r.body as CriterionDTO)
    );
  }

  /**
   * @param idSection undefined
   * @return Success
   */
  getCriterionBySectionIdSectionResponse(idSection: number): __Observable<__StrictHttpResponse<CriterionDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Criterion/BySection/${idSection}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionDTO>;
      })
    );
  }
  /**
   * @param idSection undefined
   * @return Success
   */
  getCriterionBySectionIdSection(idSection: number): __Observable<CriterionDTO> {
    return this.getCriterionBySectionIdSectionResponse(idSection).pipe(
      __map(_r => _r.body as CriterionDTO)
    );
  }

  /**
   * @param body undefined
   */
  postCriterionResponse(body?: CriterionDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
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
  postCriterion(body?: CriterionDTO): __Observable<null> {
    return this.postCriterionResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  putCriterionResponse(body?: CriterionDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
  putCriterion(body?: CriterionDTO): __Observable<null> {
    return this.putCriterionResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  deleteCriterionResponse(body?: CriterionDTO): __Observable<__StrictHttpResponse<null>> {
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
  deleteCriterion(body?: CriterionDTO): __Observable<null> {
    return this.deleteCriterionResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module CriterionService {

  /**
   * Parameters for getCriterionPageSizeIndex
   */
  export interface GetCriterionPageSizeIndexParams {
    pageSize: number;
    index: number;
  }
}

export { CriterionService }
