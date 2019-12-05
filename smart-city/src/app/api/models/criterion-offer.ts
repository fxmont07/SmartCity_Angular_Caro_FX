/* tslint:disable */
import { Criterion } from './criterion';
import { Offer } from './offer';
export interface CriterionOffer {
  criterionId?: number;
  offerId?: number;
  value?: number;
  criterion?: Criterion;
  offer?: Offer;
}
