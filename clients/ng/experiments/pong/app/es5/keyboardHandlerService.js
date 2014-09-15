"use strict";
(function(app) {
  var KeyMap = function KeyMap() {
    this.keyMap = new Map();
  };
  ($traceurRuntime.createClass)(KeyMap, {
    register: function(type, code, callback) {
      if (!this.keyMap.has(type)) {
        this.keyMap.set(type, new Map());
      }
      var typeMap = this.keyMap.get(type);
      if (typeMap.has(code)) {
        throw new Error((type + " " + code + " is already mapped"));
      }
      typeMap.set(code, callback);
    },
    get: function(type, code) {
      if (this.keyMap.has(type)) {
        try {
          throw undefined;
        } catch (typeMap) {
          typeMap = this.keyMap.get(type);
          if (typeMap.has(code)) {
            try {
              throw undefined;
            } catch (callback) {
              callback = typeMap.get(code);
              return callback;
            }
          }
        }
      }
      return null;
    }
  }, {});
  var KeyboardHandler = function KeyboardHandler() {
    this.keyMap = new KeyMap();
  };
  ($traceurRuntime.createClass)(KeyboardHandler, {
    registerUpDown: function(code, downCallback, upCallback) {
      this.keyMap.register("keydown", code, downCallback);
      this.keyMap.register("keyup", code, upCallback);
    },
    registerKey: function(type, code, callback) {
      this.keyMap.register(type, code, callback);
    },
    processKey: function(keyEvent) {
      var callback = this.keyMap.get(keyEvent.type, keyEvent.which);
      if (callback) {
        keyEvent.preventDefault();
        callback();
      }
    }
  }, {});
  app.service("keyboardHandler", KeyboardHandler);
}(angular.module("pong")));

//# sourceMappingURL=keyboardHandlerService.js.map
