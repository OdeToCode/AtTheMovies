
var s_name = Symbol();

export class Employee {
    constructor(name) {
        this[s_name] = name;
    }

    get name() {
        return this[s_name];
    }

    doWork() {
        return `${this[s_name]} is working`;
    }
}
