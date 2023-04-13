const express = require('express');
const { Place } = require('../models/place');
const linksRouter = express.Router();

linksRouter.post('/places/:id/links', async (req, res) => {

    const { title, url, type } = req.body;

    const place = await Place.findOne({ place: req.params.id });

    place.links.push({
        title, url, type,
    });

    res.json(place);
});

module.exports = { linksRouter };