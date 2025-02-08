const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/meet`);

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

module.exports = mongoose.model('user',userSchema);