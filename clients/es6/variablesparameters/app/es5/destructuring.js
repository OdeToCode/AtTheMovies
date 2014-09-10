"use strict";
describe("destructuring", function() {
  "use strict";
  it("has simple examples", function() {
    var $__0,
        $__1,
        $__2;
    var values = [22, 44];
    var $__0 = $traceurRuntime.assertObject(values),
        x = $__0[0],
        y = $__0[1];
    expect(x).toBe(22);
    expect(y).toBe(44);
    var person = {
      firstName: "Scott",
      lastName: "Allen"
    };
    var $__0 = $traceurRuntime.assertObject(person),
        firstName = $__0.firstName,
        lastName = $__0.lastName;
    expect(firstName).toBe("Scott");
    expect(lastName).toBe("Allen");
    var x = 10,
        y = 20;
    ($__0 = [y, x], x = $__0[0], y = $__0[1], $__0);
    expect(x).toBe(20);
    expect(y).toBe(10);
    var doWork = function($__0) {
      var firstName = $__0.firstName,
          lastName = $__0.lastName,
          role = ($__1 = $__0.role) === void 0 ? "developer" : $__1;
      return role + " " + firstName + " " + lastName;
    };
    var httpPost = function() {};
    var person = {
      firstName: "Scott",
      lastName: "Allen"
    };
    var result = doWork(person);
    expect(result).toBe("developer Scott Allen");
    var address = {state: "Maryland"};
    var $__1 = $traceurRuntime.assertObject(address),
        state = ($__2 = $__1.state) === void 0 ? "New York" : $__2,
        country = ($__2 = $__1.country) === void 0 ? "USA" : $__2;
    expect(state).toBe("Maryland");
    expect(country).toBe("USA");
    var odds = [1, 3, 5, 7, 9];
    var $__1 = $traceurRuntime.assertObject(odds),
        first = $__1[0],
        second = $__1[1],
        rest = Array.prototype.slice.call($__1, 2);
    expect(first).toBe(1);
    expect(second).toBe(3);
    expect(rest).toEqual([5, 7, 9]);
    var employee = {
      firstName: "Scott",
      address: {
        state: "Maryland",
        country: "USA"
      },
      favoriteNumbers: [45, 55, 32, 13]
    };
    var $__1 = $traceurRuntime.assertObject(employee),
        firstName = $__1.firstName,
        state = $traceurRuntime.assertObject($__1.address).state,
        second = $traceurRuntime.assertObject($__1.favoriteNumbers)[1];
    expect(firstName).toBe("Scott");
    expect(state).toBe("Maryland");
    expect(second).toBe(55);
  });
  it("can destructure arrays", function() {
    var doWork = function() {
      return [1, 3, 2];
    };
    var $__0 = $traceurRuntime.assertObject(doWork()),
        x = $__0[1],
        y = $__0[2],
        z = $__0[3];
    expect(x).toBe(3);
    expect(y).toBe(2);
    expect(z).toBeUndefined();
  });
  it("can destructure objects", function() {
    var doWork = function() {
      return {
        firstName: "Scott",
        lastName: "Allen",
        handles: {twitter: "OdeToCode"}
      };
    };
    var $__0 = $traceurRuntime.assertObject(doWork()),
        firstName = $__0.firstName,
        twitter = $traceurRuntime.assertObject($__0.handles).twitter;
    expect(firstName).toBe("Scott");
    expect(twitter).toBe("OdeToCode");
  });
  it("works with parameters", function() {
    var doWork = function(url, $__0) {
      var data = $__0.data,
          cache = $__0.cache,
          headers = $__0.headers;
      return data;
    };
    var result = doWork("api/test", {
      data: "test",
      cache: false
    });
    expect(result).toBe("test");
  });
});

//# sourceMappingURL=destructuring.js.map