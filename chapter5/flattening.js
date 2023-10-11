const flattening = (...arr) => {
    const result = arr.reduce((accumulator, currentValue)=> accumulator.concat(currentValue));
    return result;
}

console.log(flattening([1, 2, 3], [4, 5, 6], [7, 8, 9]));