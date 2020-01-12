/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface StudentDTO {
  id?: number;
  email: string;
  lastName: string;
  firstName: string;
  address: AddressDTO;
  sectionName: string;
  rowVersion?: string;
}
