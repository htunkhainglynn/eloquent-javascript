// version one
const everything = (arr, fun) => {
    let count = 0;
    arr.forEach(element => {
        if(fun(element)) {
            count++;
        }
    });
    return count == arr.length;
}

console.log("version1:", everything([2, 2, 2, 2], (num) => num % 2 === 0))

// version two 
let arr = [1, 1, 1, 1];

let even = (num) => num % 2 === 0;

console.log("version2: ", arr.some(even));