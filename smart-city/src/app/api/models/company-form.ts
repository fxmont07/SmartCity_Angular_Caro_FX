/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface CompanyForm {
  id?: number;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber?: string;
  description?: string;
  isPremium: boolean;
  address: AddressDTO;
}
