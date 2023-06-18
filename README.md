# assignment-2

JavaScript Methods Assignment
Goal:
This project aims to enhance your understanding of JavaScript syntax, functions, higher-order functions, and JavaScript and Array methods by rebuilding some of the most widely used JavaScript methods.

Assignment:
Recreate the following twelve (12) widely used methods in functional programming languages:

forEach
Map
Filter
Some (Any)
Every
Reduce
Includes
indexOf
Push
lastIndexOf
Object.keys()
Object.values()
Please note that while recreating these methods, you should NOT utilize the native JS method in your solution. It's important to remember that these methods (except for push()) do not mutate the input array.

For understanding how each method works and what arguments they take, consider using the Mozilla Developer Network (MDN) Web Docs. You may also look into Array.prototype.pop(), Array.prototype.shift(), and other methods for your own enrichment.

Tasks:
Here are the tasks that need to be accomplished for each of the JavaScript methods:

forEach()
Compose a function titled myEach that mimics the behaviour of Array.prototype.forEach without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

map()
Compose a function titled myMap that mimics Array.prototype.map without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

filter()
Compose a function titled myFilter that behaves like Array.prototype.filter without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

some() (aka any())
Compose a function titled mySome that mirrors Array.prototype.some without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

every()
Compose a function titled myEvery that is similar to Array.prototype.every without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

reduce()
Compose a function titled myReduce that imitates Array.prototype.reduce without using it. It should take in an array of elements and execute a provided callback function on each of those elements.

includes()
Compose a function titled myIncludes that mimics Array.prototype.includes without using it. It should take in an array of elements and indicate whether or not a target element is contained within the input array. It should return a boolean.

indexOf()
Compose a function titled myIndexOf that mirrors Array.prototype.indexOf without using it. It should take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

push()
Compose a function titled myPush that behaves like Array.prototype.push without using it. It should take in an array of elements and an elementToAdd, and append that element to the end of the array.

lastIndexOf()
Compose a function titled myLastIndexOf that mirrors Array.prototype.lastIndexOf without using it. It should take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.

Object.keys()
Compose a function titled grabKeys that mimics Object.keys() without using it. It should take in an object and return all of the keys of the key:value pairs of that object. Append this as a static method to the Object class, using the for...in loop.

Object.values()
Compose a function titled grabValues that mimics Object.values() without using it. It should take in an object and return all of the values of the key:value pairs of that object. Append this as a static method to the Object class, using the for...in loop.
