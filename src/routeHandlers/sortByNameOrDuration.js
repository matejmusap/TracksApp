import { getArrayOfTracks, sortArrayByDurationOrName } from '../utils/JSONUtils.js';
import { badRequest } from '../utils/handle.js';

 function handleSortByNameOrDuration(req, res, _next) {
    if(!req.query.sortBy) return badRequest(req,res, 'Please provide sortBy query param!')
    if (req.query.sortBy !== 'name' && req.query.sortBy !== 'duration'){
        return badRequest(req,res, 'Query string can have value name or duration!')
    };
    const sortBy = req.query.sortBy;
    const tracks = getArrayOfTracks();
    const result = sortArrayByDurationOrName(tracks, sortBy);
    res.send(result);
}

export default handleSortByNameOrDuration;
