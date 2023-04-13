const express = require('express');
const { Place } = require('../models/place');
const placesRouter = express.Router();

placesRouter.get('/places', async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

placesRouter.get('/places/:id', async (req, res) => {
    const place = await Place.findOne({
        place: req.params.id,
    });
    res.json(place);
});

placesRouter.post('/places', async (req, res) => {

    const { title, content } = req.body;

    const place = await Place.create({
        title, content,
    });

    res.redirect('/places/' + place._id);
});

module.exports = { placesRouter };