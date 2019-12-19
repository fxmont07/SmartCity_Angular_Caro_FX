/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { TokenDTO } from '../models/token-dto';
import { LoginDTO } from '../models/login-dto';
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
  postLoginResponse(body?: LoginDTO): __Observable<__StrictHttpResponse<TokenDTO>> {
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
        return _r as __StrictHttpResponse<TokenDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postLogin(body?: LoginDTO): __Observable<TokenDTO> {
    return this.postLoginResponse(body).pipe(
      __map(_r => _r.body as TokenDTO)
    );
  }
}

module LoginService {
}

export { LoginService }
