/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CriterionOfferDTO } from '../models/criterion-offer-dto';
import { CriterionOffer } from '../models/criterion-offer';
@Injectable({
  providedIn: 'root',
})
class CriterionOfferService extends __BaseService {
  static readonly getCriterionOfferOfferIdPath = '/CriterionOffer/{offerId}';
  static readonly postCriterionOfferAddPath = '/CriterionOffer/add';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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

  /**
   * @param body undefined
   * @return Success
   */
  postCriterionOfferAddResponse(body?: CriterionOffer): __Observable<__StrictHttpResponse<CriterionOffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/CriterionOffer/add`,
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
  postCriterionOfferAdd(body?: CriterionOffer): __Observable<CriterionOffer> {
    return this.postCriterionOfferAddResponse(body).pipe(
      __map(_r => _r.body as CriterionOffer)
    );
  }
}

module CriterionOfferService {
}

export { CriterionOfferService }
