const express = require('express');
const { Place } = require('../models/place');
const modelsRouter = express.Router();

modelsRouter.post('/places/:id/models', async (req, res) => {

    const { label } = req.body;

    const place = await Place.findOne({ _id: req.params.id });

    place.models.push({
        label
    });

    res.json(place);
});

module.exports = { modelsRouter };