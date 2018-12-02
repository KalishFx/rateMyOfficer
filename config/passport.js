// We using a Json Web Token stategy with passport

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');


// This returns the user id and jwt token so that we can store them in local storage and regulate sessions
module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    //console.log(jwt_payload);

    // Find the current logged in user and load info
    User.getUserById(jwt_payload._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);

      } else {
        return done(null, false);
      }
    })
  }));
}