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
person.greet.call({ name: 'this is a bound object' });
person.greet.apply({ name: 'this is a bound object' });

const newPerson = {
	name: 'newPerson',
	greet: () => {
		console.log('hi, ' + this.name);
	}
};

newPerson.greet(); // undefined global object of this

greet();
