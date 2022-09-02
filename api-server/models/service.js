const mongoose = require( 'mongoose' );

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Service name must be specified']
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String
    },
    category: {
        type: String,
        required: [true, 'Service category must be specified']
    }, 
    cost: {
        type: Number,
        required: [true, 'Cost must be specified']
    },
    time: {
        type: Number,
        required: [true, 'Time must be specified']
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true
    },
}, {
    timestamps: true,
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service