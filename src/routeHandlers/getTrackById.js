import  { getArrayOfTracks, findTrackInArrayById } from '../utils/JSONUtils.js';

async function handleGetById(req, res, _next) {
    const id = req.params.id;
    const tracks = await getArrayOfTracks();
    const result = await findTrackInArrayById(tracks, id);
    res.send(result);
}

export default handleGetById;
