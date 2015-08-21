module Domain {

  export interface ICountry
  {
        countryId : number;
        countryName : string;
        population : number;
  }
   
  export class Country implements ICountry 
  {
        countryId : number;
        countryName : string;
        population : number;
  }
}


declare var exports: any;
if (typeof exports != 'undefined') {
    exports.DomainCountry = Domain.Country;
}

