const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    addressLn1: {
        type: String,
        required: [ true, "You must specify a street address"]
    },
    addressLn2: {
        type: String,
    }, 
    town: {
        type: String,
        required: [ true, "You must specify a town"]
    },
    parish: {
        type: String,
        required: [ true, "You must specify a parish"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
},
{
    timestamps: true
})

const Address = mongoose.model('Address', addressSchema)

module.exports = Address