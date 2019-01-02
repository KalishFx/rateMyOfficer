const mongoose = require('mongoose');
const config = require('../config/database');


// Police Schema
const PoliceSchema = mongoose.Schema({
  name: {
    type: String
  },
  badge_num: {
    type: Number,
    required: true
  }
});

// Export the Police schema
const Police = module.exports = mongoose.model('Police', PoliceSchema);


// Here we are adding a new Police 
module.exports.addPol = function (newPol, callback) {
  /*const query = {
    name: newPol.name,
    badge_num: newPol.badge_num
  }*/
  newPol.save(callback);
}


// Mongo query to find Police by name - exported
module.exports.findByName = function (name, callback) {
    const query = {
      name: name
    }
    Police.find(query, callback);
  }