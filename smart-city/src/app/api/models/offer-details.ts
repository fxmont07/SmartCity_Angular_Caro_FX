/* tslint:disable */
import { CompanyDetails } from './company-details';
import { AddressDTO } from './address-dto';
export interface OfferDetails {
  id?: number;
  titleJob: string;
  description: string;
  other?: string;
  company: CompanyDetails;
  address?: AddressDTO;
}
