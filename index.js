require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
const { placesRouter } = require('./endpoints/place');
const { photosRouter } = require('./endpoints/photos');
const { linksRouter } = require('./endpoints/links');
const { modelsRouter } = require('./endpoints/models');
const { eventsRouter } = require('./endpoints/events');
const app = express();

app.use(bodyParser.json());
app.use(fileUpload({}));
app.use(express.static('public'));

app.use(placesRouter);
app.use(linksRouter);
app.use(modelsRouter);
app.use(eventsRouter);
app.use(photosRouter);

const start = async () => {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database!');

    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}.`);
    });
};

start().catch((e) => console.error('Error while starting application.', e));