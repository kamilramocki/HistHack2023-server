const mongoose = require('mongoose');
const Place = mongoose.model('Place', {
    name: String,
    cords: {
        lat: Number,
        long: Number,
    },
    links: [{
        title: String,
        url: String,
        type: String,
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