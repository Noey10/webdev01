const fs = require('fs');

fs.exists('nodeserver.js', (exists) => {
    console.log('Have file');
});
console.log('Really!');