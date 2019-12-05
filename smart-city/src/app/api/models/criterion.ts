/* tslint:disable */
import { Section } from './section';
import { CriterionOffer } from './criterion-offer';
import { CriterionStudent } from './criterion-student';
export interface Criterion {
  id?: number;
  description?: string;
  sectionId?: number;
  section?: Section;
  criterionOffer?: Array<CriterionOffer>;
  criterionStudent?: Array<CriterionStudent>;
}
