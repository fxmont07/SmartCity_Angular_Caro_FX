/* tslint:disable */
import { Section } from './section';
import { Address } from './address';
import { CriterionStudent } from './criterion-student';
import { Evaluation } from './evaluation';
import { ApplicationUser } from './application-user';
export interface Student {
  section?: Section;
  id?: number;
  firstName?: string;
  addressId?: number;
  sectionId?: number;
  address?: Address;
  lastName?: string;
  criterionStudent?: Array<CriterionStudent>;
  evaluation?: Array<Evaluation>;
  applicationIdentityId?: string;
  applicationIdentity?: ApplicationUser;
  rowVersion?: string;
}
