import  { getArrayOfTracks, findTrackInArrayById } from '../utils/JSONUtils.js';
import { badRequest } from '../utils/handle.js';

function handleGetTrackById(req, res, _next) {
    const id = req.params.id;
    const tracks = getArrayOfTracks();
    const result = findTrackInArrayById(tracks, id);
    if(!result) {
        return badRequest(req,res, 'No track with matching ID!');
    }
    res.send(result);
}

export default handleGetTrackById;
