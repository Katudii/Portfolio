const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/basn')

let CustomerSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

let customer = mongoose.Model('Customer', CustomerSchema);

module.exports = customer;