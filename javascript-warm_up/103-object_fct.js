#!/usr/bin/node
// Salama-Jamal (103-object_fct.js)
const myObject = {
  type: 'object',
  value: 12
};

// Define the incr function as a property on the myObject object
Object.defineProperty(myObject, 'incr', {
  value: function () {
    // Increment the value property by 1
    this.value += 1;
  },
  enumerable: false, // To avoid listing the incr function when logging the object
  writable: true,
  configurable: true
});

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
