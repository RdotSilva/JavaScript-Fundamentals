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

// const greet = person.greet;

friend.greet = person.greet;

friend.greet(); // this.name = david

const greet = person.greet.bind({ name: 'this is a bound object' });

greet();
