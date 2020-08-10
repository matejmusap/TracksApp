import { getArrayOfTracks } from '../utils/JSONUtils';

async function handleGetAllTracks(_req, res, _next) {
    const tracks = await getArrayOfTracks();
    res.send(tracks);
}

export default handleGetAllTracks;
