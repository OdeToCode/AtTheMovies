define(['./Employee'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var Employee = $traceurRuntime.assertObject($__0).Employee;
  console.log(new Employee("Scott"));
  describe("module in a script", function() {
    it("should be able to use Employee", function() {
      var e = new Employee("Scott");
      expect(e.doWork()).toBe("Scott is working");
    });
  });
  return {};
});

//# sourceMappingURL=EmployeeTests.js.map