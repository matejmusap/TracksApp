import { getArrayOfTracks } from '../utils/JSONUtils.js';

function handleGetAllTracks(_req, res, _next) {
    const tracks = getArrayOfTracks();
    res.send(tracks);
}

export default handleGetAllTracks;
