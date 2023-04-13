const fs = require('fs');
const path = require('path');

const IMAGES_PATH = process.env.IMAGES_PATH;

const getPhotoFileName = (placeId, file) => {
    const nameParts = file.name.split('.');
    const ext = nameParts[nameParts.length - 1];
    let name;
    let i = 1;

    do {
        name = `${placeId}_${i}.${ext}`;
        i++;
    } while (fs.existsSync(path.join(IMAGES_PATH, name)));

    return name;
};

const savePhoto = async (placeId, file) => {
    const name = getPhotoFileName(placeId, file);
    fs.writeFileSync(path.join(IMAGES_PATH, name), file.data);
    return name;
};

module.exports = { savePhoto };