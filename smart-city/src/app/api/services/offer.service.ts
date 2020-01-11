/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OfferDTO } from '../models/offer-dto';
import { OfferForm } from '../models/offer-form';
import { OfferDetails } from '../models/offer-details';
@Injectable({
  providedIn: 'root',
})
class OfferService extends __BaseService {
  static readonly getOfferPath = '/Offer';
  static readonly postOfferPath = '/Offer';
  static readonly putOfferPath = '/Offer';
  static readonly deleteOfferPath = '/Offer';
  static readonly getOfferIdOfferPath = '/Offer/{idOffer}';
  static readonly getOfferOfferdetailsIdOfferPath = '/Offer/offerdetails/{idOffer}';
  static readonly getOfferByCompanyIdCompanyPath = '/Offer/ByCompany/{idCompany}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getOfferResponse(): __Observable<__StrictHttpResponse<Array<OfferDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Offer`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OfferDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getOffer(): __Observable<Array<OfferDTO>> {
    return this.getOfferResponse().pipe(
      __map(_r => _r.body as Array<OfferDTO>)
    );
  }

  /**
   * @param body undefined
   */
  postOfferResponse(body?: OfferForm): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Offer`,
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
  postOffer(body?: OfferForm): __Observable<null> {
    return this.postOfferResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  putOfferResponse(body?: OfferForm): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Offer`,
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
  putOffer(body?: OfferForm): __Observable<null> {
    return this.putOfferResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param body undefined
   */
  deleteOfferResponse(body?: OfferDTO): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/Offer`,
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
  deleteOffer(body?: OfferDTO): __Observable<null> {
    return this.deleteOfferResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idOffer undefined
   * @return Success
   */
  getOfferIdOfferResponse(idOffer: number): __Observable<__StrictHttpResponse<OfferForm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Offer/${idOffer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OfferForm>;
      })
    );
  }
  /**
   * @param idOffer undefined
   * @return Success
   */
  getOfferIdOffer(idOffer: number): __Observable<OfferForm> {
    return this.getOfferIdOfferResponse(idOffer).pipe(
      __map(_r => _r.body as OfferForm)
    );
  }

  /**
   * @param idOffer undefined
   * @return Success
   */
  getOfferOfferdetailsIdOfferResponse(idOffer: number): __Observable<__StrictHttpResponse<OfferDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Offer/offerdetails/${idOffer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OfferDetails>;
      })
    );
  }
  /**
   * @param idOffer undefined
   * @return Success
   */
  getOfferOfferdetailsIdOffer(idOffer: number): __Observable<OfferDetails> {
    return this.getOfferOfferdetailsIdOfferResponse(idOffer).pipe(
      __map(_r => _r.body as OfferDetails)
    );
  }

  /**
   * @param idCompany undefined
   * @return Success
   */
  getOfferByCompanyIdCompanyResponse(idCompany: number): __Observable<__StrictHttpResponse<Array<OfferDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/Offer/ByCompany/${idCompany}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OfferDTO>>;
      })
    );
  }
  /**
   * @param idCompany undefined
   * @return Success
   */
  getOfferByCompanyIdCompany(idCompany: number): __Observable<Array<OfferDTO>> {
    return this.getOfferByCompanyIdCompanyResponse(idCompany).pipe(
      __map(_r => _r.body as Array<OfferDTO>)
    );
  }
}

module OfferService {
}

export { OfferService }
