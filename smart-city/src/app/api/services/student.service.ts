/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Student } from '../models/student';
import { Offer } from '../models/offer';
@Injectable({
  providedIn: 'root',
})
class StudentService extends __BaseService {
  static readonly getStudentPath = '/Student';
  static readonly getStudentOfferStudentIdPath = '/Student/offer/{studentId}';
  static readonly postStudentAddPath = '/Student/add';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getStudentResponse(): __Observable<__StrictHttpResponse<Array<Student>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Student`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Student>>;
      })
    );
  }
  /**
   * @return Success
   */
  getStudent(): __Observable<Array<Student>> {
    return this.getStudentResponse().pipe(
      __map(_r => _r.body as Array<Student>)
    );
  }

  /**
   * @param studentId undefined
   * @return Success
   */
  getStudentOfferStudentIdResponse(studentId: number): __Observable<__StrictHttpResponse<Array<Offer>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Student/offer/${studentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Offer>>;
      })
    );
  }
  /**
   * @param studentId undefined
   * @return Success
   */
  getStudentOfferStudentId(studentId: number): __Observable<Array<Offer>> {
    return this.getStudentOfferStudentIdResponse(studentId).pipe(
      __map(_r => _r.body as Array<Offer>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postStudentAddResponse(body?: Student): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Student/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Student>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postStudentAdd(body?: Student): __Observable<Student> {
    return this.postStudentAddResponse(body).pipe(
      __map(_r => _r.body as Student)
    );
  }
}

module StudentService {
}

export { StudentService }
