import { Location } from './location';
import { Address } from './address';
import { Action } from './action';
export interface Place {
	id: number,
  location: Location, 
  address: Address
}
