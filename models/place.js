const mongoose = require('mongoose');
const { Schema } = require('mongoose');
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
    photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
    events: [{
        date: Date,
        name: String,
        description: String,
    }],
    models: [{ type: Schema.Types.ObjectId, ref: 'Model' }],
});

module.exports = { Place };