/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Student } from '../models/student';
import { CompanyForm } from '../models/company-form';
@Injectable({
  providedIn: 'root',
})
class LoginService extends __BaseService {
  static readonly postLoginPath = '/Login';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return Success
   */
  postLoginResponse(body?: CompanyForm): __Observable<__StrictHttpResponse<Student>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Login`,
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
  postLogin(body?: CompanyForm): __Observable<Student> {
    return this.postLoginResponse(body).pipe(
      __map(_r => _r.body as Student)
    );
  }
}

module LoginService {
}

export { LoginService }
