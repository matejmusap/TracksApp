import express from 'express';
import bodyParser from 'body-parser';
import { error404, error500, handle } from './src/utils/handle.js';
import handleGet from './src/routeHandlers/get.js';
import handleSortByNameOrDuration from './src/routeHandlers/sortByNameOrDuration.js';
import handleGetTrackById from './src/routeHandlers/getTrackById.js';
import handleGetAllTracks from './src/routeHandlers/getAllTracks.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
app.use(error404);
app.use(error500);

const port = process.env.PORT || 3000;

app.get('/', handle(handleGet));
app.get('/tracks', handle(handleGetAllTracks));
app.get('/tracks/getbyId/:id', handle(handleGetTrackById));
app.get('/tracks/sorted', handle(handleSortByNameOrDuration));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});