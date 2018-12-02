const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});


// Export the User schema
const User = module.exports = mongoose.model('User', UserSchema);

// Mongo query to find user by id - exported
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}


// Mongo query to find user by username - exported
module.exports.getUserByUsername = function (username, callback) {
  const query = {
    username: username
  }
  User.findOne(query, callback);
}

// Here we are adding a new user but storing their password in hash format - bcrypts 10 round ..salt generation
module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}


// Password compare bcrypts compare method
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}