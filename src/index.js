import express from 'express';
import { json, urlencoded } from "body-parser";
import { error404, error500, handle } from './utils/handle.js';
import { handleSortByNameOrDuration } from './routeHandlers/sortByNameOrDuration.js';
import { handleGetById } from './routeHandlers/getTrackById.js';
import { handleGetAllTracks } from './routeHandlers/getAllTracks.js';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(error404);
app.use(error500);

const port = process.env.PORT || 3000;

app.get('/tracks', handle(handleGetAllTracks));
app.get('/tracks/getbyId/:id', handle(handleGetById));
app.get('/tracks/sorted', handle(handleSortByNameOrDuration));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});