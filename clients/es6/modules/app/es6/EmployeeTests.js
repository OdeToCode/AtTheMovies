import {Employee}  from './Employee'

console.log(new Employee("Scott"));

describe("module in a script", function(){

    it("should be able to use Employee", function(){

        let e = new Employee("Scott");
        expect(e.doWork()).toBe("Scott is working");

    });

});