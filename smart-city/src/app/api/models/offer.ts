/* tslint:disable */
import { Address } from './address';
import { Company } from './company';
import { Section } from './section';
import { CriterionOffer } from './criterion-offer';
export interface Offer {
  sectionId?: number;
  id?: number;
  other?: string;
  addressId?: number;
  companyId?: number;
  description?: string;
  titleJob?: string;
  address?: Address;
  company?: Company;
  section?: Section;
  criterionOffer?: Array<CriterionOffer>;
}
