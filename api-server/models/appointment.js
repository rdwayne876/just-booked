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
    ]
})