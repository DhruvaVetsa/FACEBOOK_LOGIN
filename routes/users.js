const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost:27017/stwt');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);