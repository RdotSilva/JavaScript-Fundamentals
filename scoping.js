// console.log(thisIsAConst); // error
// console.log(thisIsALet); // error

thisIsHoisted();
thisIsNotHoisted(); // error not defined
isThisHoisted(); // error type error not a function

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

// console.log(thisIsAVar); // new value

// Function Hoisting
function thisIsHoisted() {
	console.log('This is a function declared at the bottom of a file');
}

// Function not hoisted declared as constant so it can't be changed
const thisIsNotHoisted = function() {
	console.log('Should this be hoisted?');
};

var isThisHoisted = function() {
	console.log('Is this hoisted?');
};
