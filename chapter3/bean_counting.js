const countBs = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }

    return count;
}

const countAny = (str, key) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === key) {
            count++;
        }
    }
    return count;
}

const BCount = countBs('HeBBBllo WorBld');
const anyCount = countAny('Hello World', 'o');

console.log('B Count:', BCount);
console.log('Any Count:', anyCount);