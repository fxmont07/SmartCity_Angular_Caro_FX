/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface StudentForm {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  phoneNumber?: string;
  address: AddressDTO;
  section: string;
}
