export interface Property {
  id: number;
  name: string;
  address: string;
  propertyType: 'House' | 'Apartment' | 'Townhouse';
  listType: 'For Sale' | 'For Rent';
  bedroomCount?:number;
  bathroomCount?:number;
  parkingCount?: number;
  price: number;
  availableDate: string;
  agentName: string;
  agentEmail: string;
  agentContact?: number;

}
