#!/usr/bin/node
// Salama-Jamal (103-object_fct.js
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

myObject.incr = function () {
    this.value += 1;
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

// Update this script by adding a new function incr that increments the integer value.
// You are not allowed to use var
// guillaume@ubuntu:~/$ cat 103-object_fct.js
// #!/usr/bin/node
// const myObject = {
//   type: 'object',
//   value: 12
// };
// console.log(myObject);
// /*
// YOUR CODE HERE
// */
// myObject.incr();
// console.log(myObject);
// myObject.incr();
// console.log(myObject);
// myObject.incr();
// console.log(myObject);

// guillaume@ubuntu:~/$ ./103-object_fct.js 
// { type: 'object', value: 12 }
// { type: 'object', value: 13, incr: [Function] }
// { type: 'object', value: 14, incr: [Function] }
// { type: 'object', value: 15, incr: [Function] }
// guillaume@ubuntu:~/$ 
