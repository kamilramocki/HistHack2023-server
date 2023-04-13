const express = require('express');
const { Place } = require('../models/place');
const eventsRouter = express.Router();

eventsRouter.post('/places/:id/events', async (req, res) => {

    const { date, name, description } = req.body;

    const place = await Place.findOne({ _id: req.params.id });

    place.events.push({
        date, name, description,
    });

    res.json(place);
});

module.exports = { eventsRouter };