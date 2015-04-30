"use strict";
describe("promises", function() {
  it("will provide function to reolve or reject", function(done) {
    var executor = function(resolve, reject) {
      setTimeout((function() {
        resolve(96);
      }), 0);
    };
    var promise = new Promise(executor);
    promise.then((function(result) {
      expect(result).toBe(96);
      done();
    }));
  });
  it("can combine promises with all", function(done) {
    var slowExecutor = function(resolve, reject) {
      setTimeout((function() {
        resolve(9);
      }), 250);
    };
    var fastExecutor = function(resolve, reject) {
      setTimeout((function() {
        resolve(6);
      }), 100);
    };
    var p1 = new Promise(slowExecutor);
    var p2 = new Promise(fastExecutor);
    var p3 = Promise.all([p1, p2]);
    p3.then((function(result) {
      expect(result[0]).toBe(9);
      expect(result[1]).toBe(6);
      done();
    }));
  });
  it("can wait for the first resolve with a race", function(done) {
    var slowExecutor = function(resolve, reject) {
      setTimeout((function() {
        resolve(9);
      }), 250);
    };
    var fastExecutor = function(resolve, reject) {
      setTimeout((function() {
        resolve(6);
      }), 100);
    };
    var p1 = new Promise(slowExecutor);
    var p2 = new Promise(fastExecutor);
    var p3 = Promise.race([p1, p2]);
    p3.then((function(result) {
      expect(result).toBe(6);
      done();
    }));
  });
  it("can create a promise already in resolve state", function(done) {
    var doAsyncWork = function() {
      return Promise.resolve(10);
    };
    doAsyncWork().then((function(result) {
      expect(result).toBe(10);
      done();
    }));
  });
  it("can create a rejected promise", function(done) {
    var doAsyncWork = function() {
      return Promise.reject("error!");
    };
    doAsyncWork().then((function() {}), (function(message) {
      expect(message).toBe("error!");
      done();
    }));
  });
  it("provides catch API", function(done) {
    var doAsyncWork = function() {
      return Promise.reject("error!");
    };
    doAsyncWork().then((function() {})).catch((function(message) {
      expect(message).toBe("error!");
      done();
    }));
  });
});
