/* Property Interface */
export interface Property
{
  id: number;
  name: string;
  address: string;
  propertyType: 'House' | 'Apartment' | 'Townhouse';
  listingType: 'For Sale' | 'For Rent';
  bedroomCount?: number;
  bathroomCount?: number;
  parkingCount?: number;
  price: number;
  exclusiveListing: boolean;
  availableDate: string;
  agentName: string;
  agentEmail: string;
  agentContact?: number;

}
