let result = Promise.reject(20);

let double = x => x * 2;

result.then(double, x => 2)  // in this then() reject handler returns Promise.resolve(2), so that next catch won't run it is caught in another then() resolve handler
        .catch(err => console.log('Err:', err))  // this line won't run, only run reject and throws new Error()
        .then(x => x + 1, x => x + 2)
        .then(console.log)  // 2 + 1 = 3