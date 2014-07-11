define([], function() {
  "use strict";
  var s_name = Symbol();
  var Employee = function Employee(name) {
    $traceurRuntime.setProperty(this, s_name, name);
  };
  ($traceurRuntime.createClass)(Employee, {
    get name() {
      return this[$traceurRuntime.toProperty(s_name)];
    },
    doWork: function() {
      return (this[$traceurRuntime.toProperty(s_name)] + " is working");
    }
  }, {});
  return {
    get Employee() {
      return Employee;
    },
    __esModule: true
  };
});

//# sourceMappingURL=Employee.js.map