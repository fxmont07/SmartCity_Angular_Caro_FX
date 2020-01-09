/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface OfferResultMatching {
  offerId?: number;
  titleJob: string;
  description: string;
  address: AddressDTO;
  company: string;
  isPremium: boolean;
  rating?: number;
}
