/* tslint:disable */
import { Address } from './address';
import { Evaluation } from './evaluation';
import { Offer } from './offer';
export interface Company {
  description?: string;
  id?: number;
  password?: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  isPremium?: number;
  addressId?: number;
  address?: Address;
  evaluation?: Array<Evaluation>;
  offer?: Array<Offer>;
}
