// This is an internal module, can be used directly on browser code

module Domain {
    
    export class InvalidArgumentException implements Error
    {
        public name = "InvalidArgumentException";
        
        constructor(public message: string) {                
        }
        
        toString() : string {
            return this.name + ': ' + this.message; 
        }
    } 
    
    
    export interface IPerson
    {
        personId : number;
        userName : string;
        aboutMe : string;
        favoriteNumber: number;    
        birthCountryId : number;    
                    
        BirthCountry? : ICountry; // enable autocomplete   
    }
    
    
    export class Person implements IPerson
    {
        personId : number;
        userName : string;
        aboutMe : string;
        favoriteNumber: number;    
        birthCountryId : number;
        
        /* Sequelize cannot read Object.defineProperty
        public get birthCountryId() : number {
            return this._birthCountryId;
        }
        
        public set birthCountryId(value: number)  {
            if (value <= 0)
                throw new InvalidArgumentException("Value cannot be negative");                        
            this._birthCountryId = value;
        }*/
    
    
        
        public setRandomFavoriteNumber() : void {
            this.favoriteNumber = Math.ceil(Math.random() * 100);
        }
    }
    
    
    export interface ICountry
    {
        countryId : number;
        countryName : string;
        population : number;
    }

}


// Hack for converting internal module to external module

// http://stackoverflow.com/questions/16930398/use-a-typescript-module-class-in-the-browser-and-in-the-server-node-js
// https://srackham.wordpress.com/2012/11/20/building-heterogeneous-typescript-libraries/
// http://www.sitepoint.com/understanding-module-exports-exports-node-js/ -- internals of require

declare var exports: any;
if (typeof exports != 'undefined') {
    exports.Domain = Domain;
}

