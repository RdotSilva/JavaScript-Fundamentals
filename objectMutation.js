const o = {
	a: 'a',
	b: 'b',
	obj: {
		key: 'key'
	}
};

const o2 = Object.assign({}, o); // shallow copy

o2.obj.key = 'new value';

console.log(o.obj.key); // new value

o.a = 'new value';

console.log(o2.a); // new value
