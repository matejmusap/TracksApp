import { getArrayOfTracks, sortArrayByDurationOrName } from '../utils/JSONUtils';

async function handleSortByNameOrDuration(req, res, _next) {
    const sortBy = req.query.sortBy;
    if (sortBy !== 'name' && sortBy !== 'duration') {
        return badRequest(req,res, 'Query string can be name or duration!')
    } 
    const tracks = await getArrayOfTracks();
    const result = sortArrayByDurationOrName(tracks, sortBy);
    res.send(result);
}

export default handleSortByNameOrDuration;
