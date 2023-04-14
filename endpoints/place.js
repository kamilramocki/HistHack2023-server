const express = require('express');
const { Place } = require('../models/place');
const placesRouter = express.Router();

placesRouter.get('/places', async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

placesRouter.get('/places/search/by-name/:query', async (req, res) => {
    const { query } = req.params;
    const places = await Place.find({name: {'$regex': query, '$options': 'i'}});
    res.json(places);
});

placesRouter.get('/places/search/by-location', async (req, res) => {

    const { lat, long } = req.query;

    const places = await Place.find({
        cords: { $geoWithin: { $centerSphere: [ [lat, long ], 3 / 6378 ] } }
    })

    res.json(places)
})

placesRouter.get('/places/:id', async (req, res) => {
    const place = await Place.findOne({
        _id: req.params.id,
    });
    res.json(place);
});

placesRouter.post('/places', async (req, res) => {

    const { name, address, cords, links, events, models } = req.body;

    const place = await Place.create({
        name, address, cords, links, events, models,
        photos: [],
    });

    res.json(place);
});

module.exports = { placesRouter };