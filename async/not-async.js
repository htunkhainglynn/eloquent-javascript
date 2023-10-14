const fs = require('fs');
let start = new Date();

try {
    const data1 = fs.readFileSync('./data1.txt', 'utf-8'); 

    const data2 = fs.readFileSync('./data3.txt', 'utf-8');

    let end = new Date();
    let elapsed = end.getTime() - start.getTime();
    console.log(`read file ends. ${elapsed} ms elapsed.`);
} catch (error) {
    console.log(error);
}