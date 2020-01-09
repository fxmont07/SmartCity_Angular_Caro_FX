/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionOffer } from '../models/criterion-offer';
import { CriterionOfferDTO } from '../models/criterion-offer-dto';
@Injectable({
  providedIn: 'root',
})
class CriterionOfferService extends __BaseService {
  static readonly getCriterionOfferPath = '/CriterionOffer';
  static readonly postCriterionOfferPath = '/CriterionOffer';
  static readonly getCriterionOfferOfferIdPath = '/CriterionOffer/{offerId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getCriterionOfferResponse(): __Observable<__StrictHttpResponse<Array<CriterionOffer>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CriterionOffer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CriterionOffer>>;
      })
    );
  }
  /**
   * @return Success
   */
  getCriterionOffer(): __Observable<Array<CriterionOffer>> {
    return this.getCriterionOfferResponse().pipe(
      __map(_r => _r.body as Array<CriterionOffer>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postCriterionOfferResponse(body?: CriterionOffer): __Observable<__StrictHttpResponse<CriterionOffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CriterionOffer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionOffer>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postCriterionOffer(body?: CriterionOffer): __Observable<CriterionOffer> {
    return this.postCriterionOfferResponse(body).pipe(
      __map(_r => _r.body as CriterionOffer)
    );
  }

  /**
   * @param offerId undefined
   * @return Success
   */
  getCriterionOfferOfferIdResponse(offerId: number): __Observable<__StrictHttpResponse<CriterionOfferDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/CriterionOffer/${offerId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CriterionOfferDTO>;
      })
    );
  }
  /**
   * @param offerId undefined
   * @return Success
   */
  getCriterionOfferOfferId(offerId: number): __Observable<CriterionOfferDTO> {
    return this.getCriterionOfferOfferIdResponse(offerId).pipe(
      __map(_r => _r.body as CriterionOfferDTO)
    );
  }
}

module CriterionOfferService {
}

export { CriterionOfferService }
