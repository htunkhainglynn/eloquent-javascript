const fs = require('fs');

console.log('read file starts.');
fs.readFile('./data.txt', (err, data) => {
    if (!err) {
        console.log(data.toString())
    }
});
console.log('read file ends.');

