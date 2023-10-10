const factorial = (n) => {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

let ans = factorial(10);
console.log("ans: ", ans);