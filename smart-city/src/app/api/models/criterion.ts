/* tslint:disable */
import { CriterionOffer } from './criterion-offer';
import { CriterionStudent } from './criterion-student';
export interface Criterion {
  id?: number;
  description?: string;
  sectionId?: number;
  criterionOffer?: Array<CriterionOffer>;
  criterionStudent?: Array<CriterionStudent>;
}
