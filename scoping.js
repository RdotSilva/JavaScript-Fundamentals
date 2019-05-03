console.log(thisIsAConst); // error
console.log(thisIsALet); // error

const thisIsAConst = 50;

// thisIsAConst++; // error

const constObj = {};

constObj.a = 'a'; // no error

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51 // errors!
