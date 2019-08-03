const mongoose = require('mongoose')

const Reservation = mongoose.model('reservations', {
    host_name: {
        type: String,
    },
    client_name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    minimum: {
        type: Number,
    },
    table: {
        type: Number,
    },
    guests: {
        type: Number,
    }
})

module.exports = Reservations

/*

NOTES:
1.) Make sure to always export using module.exports = "" so you can use this in other files 

*/