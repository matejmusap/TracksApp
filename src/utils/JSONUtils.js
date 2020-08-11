import fs from 'fs';

function getArrayOfTracks() {
    const contents = fs.readFileSync('./src/data/zadatak.json');
    const jsonContent = JSON.parse(contents);
    return jsonContent.tracks.data;
};

function findTrackInArrayById(array, value) {
    const object = array.find(o => String(o.id) === value);
    return object;
};

function sortArrayByDurationOrName(array, value) {
    if(value === 'name') {
        array.sort((a, b) => { 
         const nameA = a.title.toUpperCase();
         const nameB = b.title.toUpperCase();
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
        array.sort((a, b) => {
             return a.duration - b.duration;
         });
     }
     return array;
};

export { getArrayOfTracks, findTrackInArrayById, sortArrayByDurationOrName };