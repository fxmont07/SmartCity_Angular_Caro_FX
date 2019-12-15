/* tslint:disable */
import { Address } from './address';
import { Company } from './company';
import { Section } from './section';
import { CriterionOffer } from './criterion-offer';
export interface Offer {
  companyId?: number;
  id?: number;
  description?: string;
  other?: string;
  addressId?: number;
  titleJob?: string;
  sectionid?: number;
  address?: Address;
  company?: Company;
  section?: Section;
  criterionOffer?: Array<CriterionOffer>;
}
