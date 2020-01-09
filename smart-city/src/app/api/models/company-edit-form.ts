/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface CompanyEditForm {
  id?: number;
  name: string;
  phoneNumber?: string;
  description?: string;
  isPremium: boolean;
  address: AddressDTO;
}
