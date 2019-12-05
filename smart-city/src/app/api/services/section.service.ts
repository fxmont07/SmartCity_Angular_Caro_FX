/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SectionDTO } from '../models/section-dto';
import { Section } from '../models/section';
@Injectable({
  providedIn: 'root',
})
class SectionService extends __BaseService {
  static readonly getSectionPath = '/Section';
  static readonly deleteSectionPath = '/Section';
  static readonly postSectionAddPath = '/Section/add';
  static readonly putSectionIdPath = '/Section/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getSectionResponse(): __Observable<__StrictHttpResponse<Array<SectionDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Section`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SectionDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getSection(): __Observable<Array<SectionDTO>> {
    return this.getSectionResponse().pipe(
      __map(_r => _r.body as Array<SectionDTO>)
    );
  }

  /**
   * @param body undefined
   */
  deleteSectionResponse(body?: Section): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Section`,
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
  deleteSection(body?: Section): __Observable<null> {
    return this.deleteSectionResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  postSectionAddResponse(body?: Section): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Section/add`,
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
  postSectionAdd(body?: Section): __Observable<null> {
    return this.postSectionAddResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `SectionService.PutSectionIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putSectionIdResponse(params: SectionService.PutSectionIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Section/${params.id}`,
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
   * @param params The `SectionService.PutSectionIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putSectionId(params: SectionService.PutSectionIdParams): __Observable<null> {
    return this.putSectionIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module SectionService {

  /**
   * Parameters for putSectionId
   */
  export interface PutSectionIdParams {
    id: number;
    body?: Section;
  }
}

export { SectionService }
