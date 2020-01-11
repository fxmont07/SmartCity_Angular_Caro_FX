/* tslint:disable */
import { Company } from './company';
import { Offer } from './offer';
import { Student } from './student';
export interface Address {
  id?: number;
  street?: string;
  number?: string;
  locality?: string;
  postCode?: string;
  country?: string;
  company?: Array<Company>;
  offer?: Array<Offer>;
  student?: Array<Student>;
  rowVersion?: string;
}
