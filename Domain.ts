import Sequelize = require('sequelize');



export interface IPerson
{
    personId : number;
    userName : string;
    favoriteNumber: number;
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
        
        this._person = sequelize.define<IPerson, IPerson>('person', {
            personId : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, field: 'person_id' },
            userName : { type: Sequelize.STRING, field: 'username' },
            favoriteNumber : { type: Sequelize.INTEGER, field: 'favorite_number' },         
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

