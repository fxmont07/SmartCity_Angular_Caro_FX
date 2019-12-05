/* tslint:disable */
import { Address } from './address';
import { Section } from './section';
import { CriterionStudent } from './criterion-student';
import { Evaluation } from './evaluation';
export interface Student {
  secretQuestion?: string;
  id?: number;
  lastName?: string;
  firstName?: string;
  phoneNumber?: string;
  password?: string;
  avatar?: string;
  creationDate?: string;
  mail?: string;
  answerSecret?: string;
  cv?: string;
  addressId?: number;
  sectionId?: number;
  address?: Address;
  section?: Section;
  criterionStudent?: Array<CriterionStudent>;
  evaluation?: Array<Evaluation>;
}
