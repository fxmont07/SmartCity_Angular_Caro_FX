/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Evaluation } from '../models/evaluation';
import { CriterionStudentDTO } from '../models/criterion-student-dto';
import { CriterionStudent } from '../models/criterion-student';
@Injectable({
  providedIn: 'root',
})
class CriterionStudentService extends __BaseService {
  static readonly getCriterionStudentPath = '/CriterionStudent';
  static readonly getCriterionStudentStudentIdPath = '/CriterionStudent/{studentId}';
  static readonly postCriterionStudentAddPath = '/CriterionStudent/add';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getCriterionStudentResponse(): __Observable<__StrictHttpResponse<Array<Evaluation>>> {
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
        return _r as __StrictHttpResponse<Array<Evaluation>>;
      })
    );
  }
  /**
   * @return Success
   */
  getCriterionStudent(): __Observable<Array<Evaluation>> {
    return this.getCriterionStudentResponse().pipe(
      __map(_r => _r.body as Array<Evaluation>)
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
  postCriterionStudentAddResponse(body?: CriterionStudent): __Observable<__StrictHttpResponse<CriterionStudent>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CriterionStudent/add`,
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
  postCriterionStudentAdd(body?: CriterionStudent): __Observable<CriterionStudent> {
    return this.postCriterionStudentAddResponse(body).pipe(
      __map(_r => _r.body as CriterionStudent)
    );
  }
}

module CriterionStudentService {
}

export { CriterionStudentService }
