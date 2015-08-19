import express = require('express');

import uuid = require('node-uuid');

import Domain = require('./Domain');


export = function(app : express.Express) : void {
                        
    app.get('/api', (req, res) => {    
        
                
        var models = new Domain.Models();
        
        

        
         

        

                
        var px = new Domain.Person();        
        px.personId = 0;
        px.userName = 'Kel ' + uuid.v4();        
        px.setRandomFavoriteNumber();
        px.birthCountryId = 2;  // reverted to plain property. sequelize doesn't support reading defineProperty yet, it doesn't support getter and setter on the prototype object      
                                
        var newPerson = models.getPersonModel().build(px);
                                
        var np : any = newPerson;
        np.save();
        
        return;
        
        
                
        models.getPersonModel().findAll({
            include: [{ model: models.getCountryModel(), as : 'BirthCountry', attributes: ['countryName'] }],
            attributes: ['personId', 'userName', 'favoriteNumber']
        }).then(persons => res.send(persons));
        
        return;
        

        
        /*    
        res.send('Yay');
        return;
        */
            

        
        // specifying attributes, it can exclude the field of the associated column (e.g., belongsTo) 
        models.getPersonModel().findAll({ attributes:['personId', 'userName', 'favoriteNumber', 'birthCountryId'] }).then(persons => res.send(persons));
        
        return;
        
        
        
        models.getPersonModel().find({where: { personId : 1 }, include: [{model: models.getCountryModel(), as : 'BirthCountry' }] }).then(person  => {               
            // res.send('Hola ' + person.userName + '<br/>' + (<Domain.ICountry>person['BirthCountry']).countryName);
            res.send('Hola ' + person.userName + '<br/>' + person.BirthCountry.countryName);
        });  
            
            
        
        return;  
        
        
            
        models.getPersonModel().find({where: { personId : 1 }}).then(person => {     
            (<any>person).getBirthCountry().then(country => {
            var c : Domain.ICountry = country;
                // res.send('hello ' + country.countryName);
                res.send(c);
            });
        });
        
            
        return;   
        
                                      
          
        
    });    
        
}

