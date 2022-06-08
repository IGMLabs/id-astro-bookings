export interface Trip {

  id:string|undefined;
  agencyId: string|undefined;
  agencyTripCode: string|undefined;
  destination: string|undefined;
  places: number|undefined;
  startDate: string|undefined;
  endDate: string|undefined;
  flightPrice: number|undefined;
  stayingNightPrice: number|undefined;
  kind: string|undefined;
  status: string|undefined;
  extraLuggagePricePerKilo: number|undefined;
  premiumFoodPrice: number|undefined;
}
