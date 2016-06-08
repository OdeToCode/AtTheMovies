export class Animal {
	constructor(name) {
		this.name = name;
	}
}

export let counter = 0;

export function increment() {
	counter += 1;
	return counter;
}

export let creature = {
	name: "Oscar"
};

export function inspect() {
	return creature.name;
}

export function reset() {
	creature = {
		name: "Oscar"
	};
}