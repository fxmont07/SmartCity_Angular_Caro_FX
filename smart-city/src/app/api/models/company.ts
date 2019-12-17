/* tslint:disable */
import { Address } from './address';
import { Evaluation } from './evaluation';
import { Offer } from './offer';
import { ApplicationUser } from './application-user';
export interface Company {
  addressId?: number;
  id?: number;
  phoneNumber?: string;
  description?: string;
  isPremium?: boolean;
  name?: string;
  address?: Address;
  evaluation?: Array<Evaluation>;
  offer?: Array<Offer>;
  applicationIdentityId?: string;
  applicationIdentity?: ApplicationUser;
}
