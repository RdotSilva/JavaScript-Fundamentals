function makeFunctionArray() {
	const arr = [];

	for (let i = 0; i < 5; i++) {
		arr.push(function() {
			console.log(i);
		});
	}

	return arr;
}

const functionArr = makeFunctionArray();

functionArr[0](); // shows 5

// function makeHelloFunction() {
// 	const message = 'Hello';

// 	function sayHello() {
// 		console.log(message);
// 	}
// 	return sayHello;
// }

// const sayHello = makeHelloFunction();

// // console.log(message); // Error message not defined
// console.log('typeof message', typeof message);
// console.log(sayHello.toString());

// sayHello();
