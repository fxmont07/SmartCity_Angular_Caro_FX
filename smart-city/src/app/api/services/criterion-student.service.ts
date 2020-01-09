/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionStudent } from '../models/criterion-student';
import { CriterionStudentDTO } from '../models/criterion-student-dto';
import { OfferResultMatching } from '../models/offer-result-matching';
@Injectable({
  providedIn: 'root',
})
class CriterionStudentService extends __BaseService {
  static readonly getCriterionStudentPath = '/CriterionStudent';
  static readonly postCriterionStudentPath = '/CriterionStudent';
  static readonly putCriterionStudentPath = '/CriterionStudent';
  static readonly getCriterionStudentStudentIdPath = '/CriterionStudent/{studentId}';
  static readonly postCriterionStudentMatchPath = '/CriterionStudent/match';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getCriterionStudentResponse(): __Observable<__StrictHttpResponse<Array<CriterionStudent>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CriterionStudent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionStudent>>;
      })
    );
  }
  /**
   * @return Success
   */
  getCriterionStudent(): __Observable<Array<CriterionStudent>> {
    return this.getCriterionStudentResponse().pipe(
      __map(_r => _r.body as Array<CriterionStudent>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postCriterionStudentResponse(body?: CriterionStudent): __Observable<__StrictHttpResponse<CriterionStudent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CriterionStudent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionStudent>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postCriterionStudent(body?: CriterionStudent): __Observable<CriterionStudent> {
    return this.postCriterionStudentResponse(body).pipe(
      __map(_r => _r.body as CriterionStudent)
    );
  }

  /**
   * @param body undefined
   */
  putCriterionStudentResponse(body?: Array<CriterionStudentDTO>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/CriterionStudent`,
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
  putCriterionStudent(body?: Array<CriterionStudentDTO>): __Observable<null> {
    return this.putCriterionStudentResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param studentId undefined
   * @return Success
   */
  getCriterionStudentStudentIdResponse(studentId: number): __Observable<__StrictHttpResponse<Array<CriterionStudentDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CriterionStudent/${studentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionStudentDTO>>;
      })
    );
  }
  /**
   * @param studentId undefined
   * @return Success
   */
  getCriterionStudentStudentId(studentId: number): __Observable<Array<CriterionStudentDTO>> {
    return this.getCriterionStudentStudentIdResponse(studentId).pipe(
      __map(_r => _r.body as Array<CriterionStudentDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postCriterionStudentMatchResponse(body?: Array<CriterionStudent>): __Observable<__StrictHttpResponse<Array<OfferResultMatching>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CriterionStudent/match`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OfferResultMatching>>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postCriterionStudentMatch(body?: Array<CriterionStudent>): __Observable<Array<OfferResultMatching>> {
    return this.postCriterionStudentMatchResponse(body).pipe(
      __map(_r => _r.body as Array<OfferResultMatching>)
    );
  }
}

module CriterionStudentService {
}

export { CriterionStudentService }
