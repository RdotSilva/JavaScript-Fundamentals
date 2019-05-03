const o = {
	a: 'a',
	b: 'b',
	obj: {
		key: 'key'
	}
};

const o2 = Object.assign({}, o); // shallow copy

// o2.obj.key = 'new value';

// console.log(o.obj.key); // new value

// o.a = 'new value';

// console.log(o2.a); // new value

// Deep Copy
function deepCopy(obj) {
	// Check if values are objects
	// If so copy that object (deep copy)
	// Else return the value
	const keys = Object.keys(obj);

	const newObject = {};

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (typeof obj[key] === 'object') {
			newObject[key] = deepCopy(obj[key]);
		} else {
			newObject[key] = obj[key];
		}
	}
	return newObject;
}

const o3 = deepCopy(o);

o.obj.key = 'new key!';
console.log(o3.obj.key);
