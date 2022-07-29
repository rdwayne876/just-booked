const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name must be specified']
    },
    lastName:{
        type: String, 
        required: [true, 'Last name must be specified']
    }, 
    email: {
        type: String,
        required: [true, 'Email must be specified'],
        unique: [true, 'Email already exist']
    },
    password: {
        type: String,
        required: [true, 'Password must be specified']
    },
    phone: {
        type: String, 
        required: [true, 'Phone number must be specified']
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model("provider", providerSchema)