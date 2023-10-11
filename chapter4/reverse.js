const reverse = (arr) => {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

const reverseInPlace = (arr, place) => {
    const result = [];
    for (let i = place - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    let finalResult = result.concat(arr.slice(place));

    return finalResult;
}

const ans = reverseInPlace([1, 2, 3, 4, 5], 3);
console.log("reverseInPlace:", ans);