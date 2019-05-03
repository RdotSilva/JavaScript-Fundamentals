console.log(thisIsAConst); // error
console.log(thisIsALet); // error

const thisIsAConst = 50;

// thisIsAConst++; // error

const constObj = {};

constObj.a = 'a'; // no error

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51 // errors!

var thisIsAVar = 50;
thisIsAVar = 51;

var thisIsAVar = 'new value'; // no error (shadowing example)

console.log(thisIsAVar); // new value
