const passport = require('passport'); 
const LocalStrategy = require('passport-local').Strategy; 
const User = require('./models/user'); //will require user schema models plug in already

exports.local = passport.use(new LocalStrategy(User.authenticate())); //its how specific passport stragety of local, passed in, callback fn to verify using authenticate
passport.serializeUser(User.serializeUser()); //we need to use seralize/de 
passport.deserializeUser(User.deserializeUser());