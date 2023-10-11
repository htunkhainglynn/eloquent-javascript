let obj1 = { 
            value: 10, 
            rest: { 
                value: 20, 
                rest: { 
                    value: 30, 
                    rest: null 
                } 
            } ,
            test: [1, 2, 3]
           }

let obj2 = { 
            value: 10, 
            rest: { 
                value: 20, 
                rest: { 
                    value: 30, 
                    rest: null 
                } 
            } ,
            test: [1, 2, 3]
           }

const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) {
        return true;
    }
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};


console.log(deepEqual(obj1, obj2));