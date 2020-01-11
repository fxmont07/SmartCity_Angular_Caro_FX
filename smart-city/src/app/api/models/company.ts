/* tslint:disable */
import { Address } from './address';
import { Evaluation } from './evaluation';
import { Offer } from './offer';
import { ApplicationUser } from './application-user';
export interface Company {
  address?: Address;
  id?: number;
  phoneNumber?: string;
  description?: string;
  isPremium?: boolean;
  addressId?: number;
  name?: string;
  evaluation?: Array<Evaluation>;
  offer?: Array<Offer>;
  applicationIdentityId?: string;
  applicationIdentity?: ApplicationUser;
  rowVersion?: string;
}
