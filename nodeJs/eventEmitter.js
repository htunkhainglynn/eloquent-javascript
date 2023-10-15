const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

function doSomething() {
    setTimeout(() => {
        console.log('do something');
        eventEmitter.emit('done', 200);  // done is the event name
    }, 1000);
}

doSomething();
eventEmitter.on('done', (event) => {
    console.log('after event:', event);
});