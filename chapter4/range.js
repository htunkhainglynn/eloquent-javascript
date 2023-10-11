const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

let ans = range(1, 10, 2);

const sum = (arr) => {
    let result = 0;
    for (let i of arr) {
        result += i;
    }
    return result;
}

console.log("range:", ans);
console.log("sum:", sum(ans));