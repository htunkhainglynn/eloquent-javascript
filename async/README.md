Why Async?
- Because of I/O.
- I/O needs to wait.
- CPU becomes inefficient.
- For example, line 1 needs to fetch data from DB but line 2 is seperate job to do. 
- In synchronous model, you need to wait line 1 even if they are not related.
- So using async makes not to wait that kind of thing.
- It becomes efficient, but not fast. If line 1 takes 2 seconds to run, it takes 2 seconds in async too.