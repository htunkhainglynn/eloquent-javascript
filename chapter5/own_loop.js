const loop = (start, test, update, body) => {
    for (let i = start; test(i); i = update(i)) {
        body(i);
    }
}

loop(0, n => n < 10, n => n+1, console.log);