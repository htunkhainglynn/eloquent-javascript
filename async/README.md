### Why Async?
- Because of I/O, high latency.
- I/O needs to wait (blocking).
- CPU becomes idle state.
- For example, line 1 needs to fetch data from DB but line 2 is seperate job to do. 
- In synchronous model, you need to wait line 1 even if they are not related.
- So using async makes not to wait in this situation.
- It becomes efficient, but not fast. If line 1 takes 2 seconds to run, it takes 2 seconds in async too.
- But when will the async function returns data? No one knows. So, we need callbacks to run when the async function is done. 

### Problems with callbackes.
- What if the callback needs another callback? It becomes callback hell and code becomes hard to read.

### Why fs.read() cannot use try/catch?
- try/catch only works in synchronous code.

### Promise comes to help.
- Promise is a object that represents a future value.
- We can remove callback hell with Promise by chaining. So it becomes easy to read.
- Promise has 3 states.
  - Pending: Initial state, not fulfilled or rejected.
  - Fulfilled: Operation completed successfully.
  - Rejected: Operation failed.

### Promise.then()'s magic.
- Promise.then() returns a new Promise.
- So we can chain Promise.then(), it acts like map.
- Promise.then() can take 2 arguments.
  - First argument is a function to run when the Promise is fulfilled.
  - Second argument is a function to run when the Promise is rejected.
- If Promise.then returns a nested Promise, next then can act like flatmap.
- Promise.catch() is a shorthand for Promise.then(null, function(err) { ... }), so we can still chain it.
- Promise.all() takes an array of Promises and returns a new Promise.
- Promise.all() returns a Promise that fulfills when all of the promises in the array passed to it have been fulfilled.

### Promise.all() vs Promise.setteldAll()
- Promise.all() returns a Promise that fulfills when all of the promises in the array passed to it have been fulfilled. If not all of the promises passed to Promise.all() fulfill, the returned promise will reject.
- Promise.setteldAll() returns a Promise that always fulfills with an array of the values or reasons of the passed promises, provided that all of the promises passed were settled (either fulfilled or rejected). If it was rejected, the array will contain the reason values.

### Promise problem
- Promise.then() doesn't look like imperative code.
- What if we can write async nature code in imperative way?

### Async/Await
- Async/Await is a syntactic sugar for Promise.
- #### Promise code.
```
        let urls = [
            'https://jsonplaceholder.typicode.com/todos/1',
            'https://jsonplaceholder.typicode.com/todos/2']

        let promises = urls.map(url => fetch(url).then(response => response.json()));
        Promise.all(promises)
            .then(responses => {
                console.log('response:', responses)
            })
            .catch(error => {
                console.log('error:', error)
            })
```
- #### Async/Await code
```
async function fetchTodos() {
    let urls = ['https:// jsonplaceholder.typicode.com/todos/1',
                'https://jsonplaceholder.typicode.com/todos/2'];

    let promises = urls.map(async (url) => {
                const response = await fetch(url);
                return response.json();
            });

    try {
        const responses = await Promise.all(promises);
              console.log('response:', responses);
        } catch (error) {
                console.log('error:', error);
        }
}

  fetchTodos();
```
- Then, you can write async nature code in imperative way.
- But you lose the abilitiy to use railway oriented programming.

### Behind the scene of async/await
- It use generator and Promise.
- await fetch(utr) is when the fetch is done, it yields the value and call next() with the response.
