class Set {
	constructor(arr) {
		this.arr = arr;
	}

	add(val) {
		if (!this.has(val)) this.arr.push(val);
	}

	delete(val) {}

	has(val) {
		return this.arr.includes(val);
	}
}
