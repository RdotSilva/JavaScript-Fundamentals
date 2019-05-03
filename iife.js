const sayHello = (function() {
	const message = 'Hello';

	function sayHello() {
		console.log(message);
	}
	return sayHello;
})();
