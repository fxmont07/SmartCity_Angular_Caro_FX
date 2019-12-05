/* tslint:disable */
import { Criterion } from './criterion';
import { Offer } from './offer';
import { Student } from './student';
export interface Section {
  id?: number;
  name?: string;
  criterion?: Array<Criterion>;
  offer?: Array<Offer>;
  student?: Array<Student>;
}
