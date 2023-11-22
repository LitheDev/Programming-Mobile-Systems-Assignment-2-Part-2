import { Property } from './property';

export const PROPERTIES: Property[] = [
  {id: 0, name: "Alpha", address: "123 Alpha Street", propertyType: "House", listingType: "For Sale", price: 1200000, exclusiveListing: false, availableDate: "2023-11-16", agentName: "John Anderson", agentEmail: "John.Anderson@alpha.com"},
  {id: 1, name: "Beta", address: "456 Beta Street", propertyType: "Townhouse", listingType: "For Rent", price: 1000, exclusiveListing: false, availableDate: "2023-11-17", agentName: "Jill Smith", agentEmail: "Jill.Smith@beta.com", bedroomCount: 4},
  {id: 2, name: "Delta", address: "789 Delta Street", propertyType: "Apartment", listingType: "For Sale", price: 2000, exclusiveListing: true, availableDate: "2023-11-17", agentName: "Jill Smith", agentEmail: "Jill.Smith@beta.com", bedroomCount: 4},
  {id: 3, name: "Beta", address: "456 Beta Street", propertyType: "Townhouse", listingType: "For Rent", price: 1000, exclusiveListing: true, availableDate: "2023-11-17", agentName: "Jill Smith", agentEmail: "Jill.Smith@beta.com", bedroomCount: 4},
  {id: 4, name: "Beta", address: "456 Beta Street", propertyType: "Townhouse", listingType: "For Rent", price: 1000, exclusiveListing: true, availableDate: "2023-11-17", agentName: "Jill Smith", agentEmail: "Jill.Smith@beta.com", bedroomCount: 4}
];
