const fs = require('fs');

let start = new Date();

fs.readFile('./data1.txt', (err, data) => {
    if (!err) {
        console.log(data.toString())
    }
});

fs.readFile('./data3.txt', (err, data) => {
    if (!err) {
        console.log(data.toString());
    }
})

let end = new Date();
let elapsed = end.getTime() - start.getTime();
console.log(`read file ends. ${elapsed} ms elapsed.`);

