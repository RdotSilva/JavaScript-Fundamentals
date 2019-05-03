// const sayHello = (function() {
// 	const message = 'Hello';

// 	function sayHello() {
// 		console.log(message);
// 	}
// 	return sayHello;
// })();

// const counter = (function() {
// 	let count = 0;

// 	return {
// 		inc: function() {
// 			count++;
// 		},
// 		get: function() {
// 			console.log(count);
// 		}
// 	};
// })();

// counter.get();
// counter.inc();
// counter.get();

function makeFunctionArray() {
	const arr = [];

	for (var i = 0; i < 5; i++) {
		arr.push(
			(function(x) {
				return function() {
					console.log(x);
				};
			})(i)
		);
	}

	return arr;
}

const functionArr = makeFunctionArray();

functionArr[0](); // shows 5
