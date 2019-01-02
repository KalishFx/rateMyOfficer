const mongoose = require('mongoose');
const config = require('../config/database');


// Police Schema
const PoliceSchema = mongoose.Schema({
  name: {
    type: String,
    //required: true
  },
  badge_num: {
    type: Number,
    //required: true
  }
  //commented out the require attributes, that's the only was so far the function adds successfully to the Database
});

// Export the Police schema
Police = module.exports = mongoose.model('Police', PoliceSchema);


// Here we are adding a new Police 
module.exports.addPol = function (newPol, callback) {
  //newPol.badge_num and newPol.name are undefined right here but everything else seems to be fine
  newPol.save(callback);
}


// Mongo query to find Police by name - exported
module.exports.findByName = function (name, callback) {
    const query = {
      name: name
    }
    Police.find(query, callback);
  }