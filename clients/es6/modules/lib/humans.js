function work(name) {
	return `${name} is working`;
}

class Person {
	constructor(name) {
		this.name = name;
	}
	doWork() {
		return work(this.name);
	}
}

export {work, Person}
export default Person








