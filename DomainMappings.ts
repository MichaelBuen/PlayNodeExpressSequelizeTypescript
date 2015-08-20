import Sequelize = require('sequelize');

// var domain : typeof Domain = require('./domains/all.js').Domain; // .Domain is typeless. To make strongly-typed alias for it, use typeof.

    
export class Models {
    

    private _person : Sequelize.Model<Domain.IPerson, Domain.IPerson>;
    private _country : Sequelize.Model<Domain.ICountry, Domain.ICountry>;

    constructor() {
        
        
        
        
        var sequelize = new Sequelize('commerce', 'postgres', 'opensesame93', {
            dialect: 'postgres', 
            define: {
                timestamps: false                
            }
        });
        
        this._person = sequelize.define<Domain.Person, Domain.Person>('person', {
            personId : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, field: 'person_id' },
            userName : { type: Sequelize.STRING, field: 'username' },
            aboutMe : { type: Sequelize.STRING, field: 'about_me' },
            favoriteNumber : { type: Sequelize.INTEGER, field: 'favorite_number' },
            birthCountryId : { type: Sequelize.INTEGER, field: 'birth_country_id' }             
        }, {
            tableName : 'person'
        });
        
        this._country = sequelize.define<Domain.ICountry, Domain.ICountry>('country', {
            countryId : { type: Sequelize.INTEGER, autoincrement: true, primaryKey : true, field : 'country_id' },
            countryName : { type: Sequelize.STRING, field: 'country_name' },
            population : { type: Sequelize.INTEGER, field: 'population' }
        }, { 
            tableName : 'country' 
        });
        

        this._person.belongsTo(this._country, { as : 'BirthCountry', foreignKey : 'birth_country_id', constraints: true });
               
    }
    
    
    
    
    public get personModel() :  Sequelize.Model<Domain.IPerson, Domain.IPerson> {
        return this._person;
    }
    
    
    public get countryModel() : Sequelize.Model<Domain.ICountry, Domain.ICountry> {
        return this._country;
    }
    
} 

