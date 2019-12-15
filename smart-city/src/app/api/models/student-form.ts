/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface StudentForm {
  email?: string;
  lastName?: string;
  firstName?: string;
  phoneNumber?: string;
  creationDate?: string;
  secretQuestion?: string;
  answerSecret?: string;
  address?: AddressDTO;
  section?: string;
}
