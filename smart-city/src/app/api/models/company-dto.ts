/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface CompanyDTO {
  id?: number;
  email?: string;
  name?: string;
  phoneNumber?: string;
  description?: string;
  isPremium?: number;
  address?: AddressDTO;
}
