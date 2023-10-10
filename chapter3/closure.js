const multiplier = (factor) => {
    return number => factor * number;
}

/* 
    Even the multiplier function is already executed, the factor is still in the memory.
    This is called closure.
*/
const twice = multiplier(2);  
const thrice = multiplier(3);

console.log(twice(5));
console.log(thrice(5));