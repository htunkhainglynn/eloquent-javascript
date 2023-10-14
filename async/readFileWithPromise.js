const fs = require("fs");

fs.promises.readFile("./data.txt")
            .then(data => fs.promises.readFile(data)) // this returns nested promise, second then() works like a flatMap
            .then(data => console.log(data.toString()))  
            .catch(err => console.log(err));  // using this catch to catch all errors, catch also returns a promise so we can chain it