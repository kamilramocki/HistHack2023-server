const mongoose = require('mongoose');
const Place = mongoose.model('Place', {
    name: String,
    address: {
     streetName: String,
     streetNumber: String,
     city: String
    },
    cords: [Number],
    links: [{
        title: String,
        link: String,
        contentType: String,
    }],
    photos: [{
        label: String,
        description: String,
        fileName: String,
    }],
    events: [{
        date: Date,
        name: String,
        description: String,
    }],
    models: [{
        label: String,
        fileName: String,
    }],
});

module.exports = { Place };