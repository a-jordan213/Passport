const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    admin: { //by default it'll be set to false
        type: Boolean,
        default: false
    }
});
userSchema.plugin(passportLocalMongoose); //

//then export, can do it in 1 line
module.exports = mongoose.model('User', userSchema);