const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Model = mongoose.model('Model', {
    label: String,
    fileName: String,
});

module.exports = { Model };