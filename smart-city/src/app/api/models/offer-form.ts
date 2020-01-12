/* tslint:disable */
import { AddressDTO } from './address-dto';
export interface OfferForm {
  id?: number;
  titleJob: string;
  description: string;
  other?: string;
  address: AddressDTO;
  companyId: number;
  sectionId: number;
  rowVersion?: string;
}
