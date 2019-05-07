const person = {
	name: 'jordan',
	greet: function() {
		console.log('hello ' + this.name);
	}
};
person.greet(); // this.name = jordan

const friend = {
	name: 'david'
};

const greet = person.greet;

friend.greet = person.greet;

friend.greet(); // this.name = david

greet(); // this = global object with no name key
