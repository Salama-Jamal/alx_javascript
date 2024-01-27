#!/usr/bin/node
// Salama-Jamal (102-add_me_maybe.js)
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
myObject.incr = function () {
  this.value++;
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
