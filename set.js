class Set {
	constructor(arr) {
		this.arr = arr;
	}

	add(val) {
		if (!this.has(val)) this.arr.push(val);
	}

	delete(val) {
		this.arr = this.arr.filter(x => x !== val);
	}

	has(val) {
		return this.arr.includes(val);
	}
}
