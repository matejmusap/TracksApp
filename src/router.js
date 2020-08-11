import express from 'express';
import { handle } from './utils/handle.js';
import handleGet from './routeHandlers/get.js';
import handleSortByNameOrDuration from './routeHandlers/sortByNameOrDuration.js';
import handleGetTrackById from './routeHandlers/getTrackById.js';
import handleGetAllTracks from './routeHandlers/getAllTracks.js';

const router = express.Router();

router.get('/', handle(handleGet))
    .get('/tracks', handle(handleGetAllTracks))
    .get('/tracks/getbyId/:id', handle(handleGetTrackById))
    .get('/tracks/sorted', handle(handleSortByNameOrDuration));

export default router;
