/* tslint:disable */
import { Address } from './address';
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
  email?: string;
  answerSecret?: string;
  cv?: string;
  addressId?: number;
  sectionId?: number;
  address?: Address;
  criterionStudent?: Array<CriterionStudent>;
  evaluation?: Array<Evaluation>;
}
