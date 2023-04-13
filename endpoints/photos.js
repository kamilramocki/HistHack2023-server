const express = require('express');
const { Place } = require('../models/place');
const photosRouter = express.Router();
const { savePhoto } = require('../utils/photos');

photosRouter.post('/places/:id/photos', async (req, res) => {

    const { label, description } = req.body;

    const place = await Place.findOne({ _id: req.params.id });
    const fileName = await savePhoto(place._id, req.files.image);

    place.photos.push({
        label, description,
        fileName,
    });

    place.save();

    res.json(place);
});

module.exports = { photosRouter };