const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
    accessToken: {
        type: String
    },
    refreshToken: [
        {
            type: String,
        }
    ],
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }, 
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ]
},
{
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema)