import Sequelize = require('sequelize');




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
    favoriteNumber: number;
    birthCountryId : number;    
                
    BirthCountry? : ICountry; // enable autocomplete   
}


export class Person implements IPerson
{
    personId : number;
    userName : string;
    favoriteNumber: number;
    
    private _birthCountryId : number;
    
    public get birthCountryId() : number {
        return this._birthCountryId;
    }
    
    public set birthCountryId(value: number)  {
        if (value <= 0)
            throw new InvalidArgumentException("Value cannot be negative");                        
        this._birthCountryId = value;
    }


    
    public setRandomFavoriteNumber() : void {
        this.favoriteNumber = Math.ceil(Math.random() * 100);
    }
}


export interface ICountry
{
    countryId : number;
    countryName : string;
}
    
export class Models {
    

    private _person : Sequelize.Model<IPerson, IPerson>;
    private _country : Sequelize.Model<ICountry, ICountry>;

    constructor() {
        
        var sequelize = new Sequelize('commerce', 'postgres', 'opensesame93', {
            dialect: 'postgres', 
            define: {
                timestamps: false                
            }
        });
        
        this._person = sequelize.define<Person, Person>('person', {
            personId : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, field: 'person_id' },
            userName : { type: Sequelize.STRING, field: 'username' },
            favoriteNumber : { type: Sequelize.INTEGER, field: 'favorite_number' },
            birthCountryId : { type: Sequelize.INTEGER, field: 'birth_country_id' }             
        }, {
            tableName : 'person'
        });
        
        this._country = sequelize.define<ICountry, ICountry>('country', {
            countryId : { type: Sequelize.INTEGER, autoincrement: true, primaryKey : true, field : 'country_id' },
            countryName : { type: Sequelize.STRING, field: 'country_name' }
        }, { 
            tableName : 'country' 
        });
        

        this._person.belongsTo(this._country, { as : 'BirthCountry', foreignKey : 'birth_country_id', constraints: true });
               
    }
    
    
    
    public getPersonModel() : Sequelize.Model<IPerson,IPerson> {
        return this._person;
    }
    
    public getCountryModel() : Sequelize.Model<ICountry,ICountry> {
        return this._country;
    }
} 

