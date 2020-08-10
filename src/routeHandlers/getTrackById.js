import  { getArrayOfTracks, findTrackInArrayById } from '../utils/JSONUtils.js';

async function handleGetTrackById(req, res, _next) {
    const id = req.params.id;
    const tracks = await getArrayOfTracks();
    const result = await findTrackInArrayById(tracks, id);
    res.send(result);
}

export default handleGetTrackById;
