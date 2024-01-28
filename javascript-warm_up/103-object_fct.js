#!/usr/bin/node
// Salama-Jamal (103-object_fct.js)
// Define the object with a value property and an incr method
const myObject = {
  type: 'object',
  value: 12,
  // The incr method takes no arguments and increments the value by one
  incr: function () {
    this.value++;
  }
};

// Print the initial object
console.log(myObject);

// Call the incr method three times and print the object after each call
myObject.incr();
console.dir(myObject);
myObject.incr();
console.dir(myObject);
myObject.incr();
console.dir(myObject);
