//EventEmitter is a class that allows us to create and handle custom events in Node.js. It provides methods to register event listeners and emit events. The EventEmitter class is part of the 'events' module in Node.js.
//myEmitter is an oject of the EventEmitter class.
//on() method is used to register an event listener for a specific event.
//emit() method is used to trigger an event and call all the registered listeners for that event.


// const EventEmitter = require('events');   
// const myEmitter = new EventEmitter();
// myEmitter.on('greet', (name) => {            //name is a formal parameter that will be passed when the event is emitted.
//     console.log(`Hello, ${name}! Welcome to Node.js EventEmitter.`);
// });

// myEmitter.on('exit', () => {
//     console.log("Application Closed.");
// });

// myEmitter.emit('greet', 'Atisha');
// myEmitter.emit('exit');


const { EventEmitter } = require('events');
class Button extends EventEmitter {}

const button = new Button();

button.on('click',() => console.log('Button clicked!'));
button.on('mouseover',() => console.log('Mouse is over the button!'));

button.emit('click');
button.emit('mouseover');