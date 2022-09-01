const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        required: true
    },
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service'
        }
    ],
    confirmed: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment