import express = require('express');
import uuid = require('node-uuid');

import Domain = require('./Domain');

// Serving static files
import path = require('path');


var models = new Domain.Models();

var app = express();


app.get('/api', (req, res) => {
     

   models.getPersonModel().find({where: { personId : 1 }, include: [{model: models.getCountryModel(), as : 'BirthCountry' }] }).then(person  => {               
     res.send("Hola " + person.userName + "<br/>" + (<Domain.ICountry>person["BirthCountry"]).countryName);
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
     
  models.getPersonModel().findAll({
    include: [{ model: models.getCountryModel(), as : 'BirthCountry' } ]
  }).then(person => res.send(person));
   
   
            
  // models.getPerson().find({where: { personId : 1 }}).then(person => res.send(person));
    
  var newPerson = models.getPersonModel().build({
    personId : 0,
    userName : 'Kel ' + uuid.v4(),
    favoriteNumber : 76
  });
  
  var np : any = newPerson;
  np.setBirthCountry(1);
  np.save();
  

});


// Serving static files
// http://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js
// http://stackoverflow.com/questions/16593686/what-is-the-best-practice-for-serving-html-in-node-js-with-express-js
app.use('/', express.static(__dirname + '/public'));



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
    
  console.log('Example app listening at http://%s:%s', host, port);
});

