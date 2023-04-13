const express = require('express');
const { Place } = require('../models/place');
const linksRouter = express.Router();

linksRouter.post('/places/:id/links', async (req, res) => {

    const { title, link, contentType } = req.body;

    const place = await Place.findOne({ _id: req.params.id });

    place.links.push({
        title, link, contentType,
    });

    res.json(place);
});

module.exports = { linksRouter };