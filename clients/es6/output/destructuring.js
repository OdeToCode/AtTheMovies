"use strict";
describe("destructuring", function() {
  "use strict";
  it("has simple examples", function() {
    var values = [22, 44];
    var $__0 = values,
        x = $__0[0],
        y = $__0[1];
    expect(x).toBe(22);
    expect(y).toBe(44);
    var doWork = function($__1) {
      var $__3;
      var $__2 = $__1,
          firstName = $__2.firstName,
          lastName = $__2.lastName,
          role = ($__3 = $__2.role) === void 0 ? "developer" : $__3;
      return role + " " + firstName + " " + lastName;
    };
    doWork({firstName: "Scott"});
    var person = {
      firstName: "Scott",
      lastName: "Allen"
    };
    var result = doWork(person);
    expect(result).toBe("developer Scott Allen");
    var odds = [1, 3, 5, 7, 9];
    var $__1 = odds,
        first = $__1[0],
        secon = $__1[1],
        rest = Array.prototype.slice.call($__1, 2);
    expect(first).toBe(1);
    expect(secon).toBe(3);
    expect(rest).toEqual([5, 7, 9]);
    var employee = {
      firstName: "Scott",
      address: {
        state: "Maryland",
        country: "USA"
      },
      favoriteNumbers: [45, 55, 32, 13]
    };
    var $__2 = employee,
        firstName = $__2.firstName,
        state = $__2.address.state,
        second = $__2.favoriteNumbers[1];
    expect(firstName).toBe("Scott");
    expect(state).toBe("Maryland");
    expect(second).toBe(55);
  });
  it("can have defaults", function() {
    var $__1,
        $__2;
    var address = {state: "Maryland"};
    var $__0 = address,
        state = ($__1 = $__0.state) === void 0 ? "New York" : $__1,
        country = ($__2 = $__0.country) === void 0 ? "USA" : $__2;
    expect(state).toBe("Maryland");
    expect(country).toBe("USA");
  });
  it("can destructure arrays", function() {
    var doWork = function() {
      return [1, 3, 2];
    };
    var $__0 = doWork(),
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
    var $__0 = doWork(),
        firstName = $__0.firstName,
        twitter = $__0.handles.twitter;
    expect(firstName).toBe("Scott");
    expect(twitter).toBe("OdeToCode");
  });
  it("works with parameters", function() {
    var doWork = function(url, $__0) {
      var $__1 = $__0,
          data = $__1.data,
          cache = $__1.cache,
          headers = $__1.headers;
      return data;
    };
    var result = doWork("api/test", {
      data: "test",
      cache: false
    });
    expect(result).toBe("test");
  });
});
