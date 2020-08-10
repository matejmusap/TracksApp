async function getArrayOfTracks() {
    const contents = await fs.readFileSync('./src/data/zadatak.json');
    var jsonContent = await JSON.parse(contents);
    return jsonContent.tracks.data;
};

async function findTrackInArrayById(array, value) {
    const object = await array.find(o => String(o.id) === value);
    return object;
};

async function sortArrayByDurationOrName(array, value) {
    if(value === 'name') {
        result = array.sort((a, b) => { 
         var nameA = a.title.toUpperCase();
         var nameB = b.title.toUpperCase();
         if (nameA < nameB) {
           return -1;
         }
         if (nameA > nameB) {
           return 1;
         }
       
         return 0;
         });
     }
     if(value === 'duration') {
         result = array.sort((a, b) => {
             return a.duration - b.duration
         });
     }
};

export {getArrayOfTracks, findTrackInArrayById, sortArrayByDurationOrName};