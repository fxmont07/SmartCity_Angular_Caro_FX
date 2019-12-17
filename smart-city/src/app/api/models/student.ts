/* tslint:disable */
import { Address } from './address';
import { Section } from './section';
import { CriterionStudent } from './criterion-student';
import { Evaluation } from './evaluation';
import { ApplicationUser } from './application-user';
export interface Student {
  sectionId?: number;
  id?: number;
  firstName?: string;
  phoneNumber?: string;
  secretQuestion?: string;
  answerSecret?: string;
  addressId?: number;
  lastName?: string;
  address?: Address;
  section?: Section;
  criterionStudent?: Array<CriterionStudent>;
  evaluation?: Array<Evaluation>;
  applicationIdentityId?: string;
  applicationIdentity?: ApplicationUser;
}
