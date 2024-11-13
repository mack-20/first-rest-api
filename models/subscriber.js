const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    subscribedToChannel: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Subscriber = new mongoose.model('Subscriber', subscriberSchema)

module.exports = Subscriber