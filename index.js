require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { placesRouter } = require('./endpoints/place');
const app = express();

app.use(bodyParser.json());

app.use(placesRouter);

const start = async () => {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database!');

    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}.`);
    });
};

start().catch((e) => console.error('Error while starting application.', e));