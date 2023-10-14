const fs = require('fs');

console.log('read file starts.');

fs.readFile('./data1.txt', (err, data) => {
    if (!err) {
        fs.readFile(data, (err, data) => {  // another callback
            if (!err) {
                console.log(data.toString());
            }
        });
    }
});

console.log('read file ends.');
