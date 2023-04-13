const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Photo = mongoose.model('Photo', {
    label: String,
    description: String,
    fileName: String,
});

module.exports = { Photo };