/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface StudentEditForm {
  id?: number;
  lastName: string;
  firstName: string;
  address: AddressDTO;
  section?: string;
  rowVersion?: string;
}
