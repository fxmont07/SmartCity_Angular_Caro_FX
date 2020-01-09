/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { StudentTable } from '../models/student-table';
import { Student } from '../models/student';
import { StudentForm } from '../models/student-form';
import { StudentDTO } from '../models/student-dto';
import { Offer } from '../models/offer';
import { StudentEditForm } from '../models/student-edit-form';
@Injectable({
  providedIn: 'root',
})
class StudentService extends __BaseService {
  static readonly getStudentPath = '/Student';
  static readonly postStudentPath = '/Student';
  static readonly deleteStudentPath = '/Student';
  static readonly getStudentStudentIdPath = '/Student/{studentId}';
  static readonly getStudentOfferStudentIdPath = '/Student/offer/{studentId}';
  static readonly putStudentIdPath = '/Student/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getStudentResponse(): __Observable<__StrictHttpResponse<Array<StudentTable>>> {
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
        return _r as __StrictHttpResponse<Array<StudentTable>>;
      })
    );
  }
  /**
   * @return Success
   */
  getStudent(): __Observable<Array<StudentTable>> {
    return this.getStudentResponse().pipe(
      __map(_r => _r.body as Array<StudentTable>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postStudentResponse(body?: StudentForm): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<Student>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postStudent(body?: StudentForm): __Observable<Student> {
    return this.postStudentResponse(body).pipe(
      __map(_r => _r.body as Student)
    );
  }

  /**
   * @param body undefined
   */
  deleteStudentResponse(body?: Student): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param body undefined
   */
  deleteStudent(body?: Student): __Observable<null> {
    return this.deleteStudentResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param studentId undefined
   * @return Success
   */
  getStudentStudentIdResponse(studentId: number): __Observable<__StrictHttpResponse<StudentDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Student/${studentId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StudentDTO>;
      })
    );
  }
  /**
   * @param studentId undefined
   * @return Success
   */
  getStudentStudentId(studentId: number): __Observable<StudentDTO> {
    return this.getStudentStudentIdResponse(studentId).pipe(
      __map(_r => _r.body as StudentDTO)
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
   * @param params The `StudentService.PutStudentIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putStudentIdResponse(params: StudentService.PutStudentIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Student/${params.id}`,
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
   * @param params The `StudentService.PutStudentIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   */
  putStudentId(params: StudentService.PutStudentIdParams): __Observable<null> {
    return this.putStudentIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module StudentService {

  /**
   * Parameters for putStudentId
   */
  export interface PutStudentIdParams {
    id: number;
    body?: StudentEditForm;
  }
}

export { StudentService }
