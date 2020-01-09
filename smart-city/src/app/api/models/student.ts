/* tslint:disable */
import { Address } from './address';
import { Section } from './section';
import { CriterionStudent } from './criterion-student';
import { Evaluation } from './evaluation';
import { ApplicationUser } from './application-user';
export interface Student {
  address?: Address;
  id?: number;
  firstName?: string;
  addressId?: number;
  sectionId?: number;
  lastName?: string;
  section?: Section;
  criterionStudent?: Array<CriterionStudent>;
  evaluation?: Array<Evaluation>;
  applicationIdentityId?: string;
  applicationIdentity?: ApplicationUser;
}
