const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, 'node_modules', '.cache');

fs.rm(cachePath, { recursive: true, force: true }, (err) => {
    if (err) {
        console.error('Error deleting .cache:', err);
    } else {
        console.log('.cache successfully deleted');
    }
});
