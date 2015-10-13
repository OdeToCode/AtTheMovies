"use strict";

describe("promises", function () {

    it("compares to callbacks", function (done) {

        var executor = function executor(callback) {

            setTimeout(function () {
                callback("This is the result");
            }, 0);
        };

        executor(function (result) {
            expect(result).toBe("This is the result");
            done();
        });
    });

    it("producer consumer style", function (done) {

        var calculate = function calculate() {

            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(96);
                }, 0);
            });
        };

        var success = function success(result) {
            expect(result).toBe(96);
            done();
        };

        var error = function error(reason) {
            // ... error handling code for a rejected promise 
        };

        var promise = calculate();
        promise.then(success, error);
    });

    it("will provide function to reolve or reject", function (done) {

        var executor = function executor(resolve, reject) {

            setTimeout(function () {
                resolve(96);
            }, 0);
        };

        var promise = new Promise(executor);
        promise.then(function (result) {
            expect(result).toBe(96);
            done();
        });
    });

    it("chains output to an input", function (done) {

        var calculate = function calculate(value) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(value + 1);
                }, 0);
            });
        };

        var verify = function verify(result) {
            expect(result).toBe(5);
            done();
        };

        calculate(1).then(calculate).then(function (result) {
            return result + 1;
        }).then(calculate).then(verify);
    });

    it("syntactic test", function (done) {

        var calculate = function calculate(value) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(value + 1);
                }, 0);
            });
        };

        var verify1 = function verify1(result) {
            expect(result).toBeUndefined();
        };

        var verify2 = function verify2(result) {
            expect(result).toBeUndefined();
            done();
        };

        var doNothing = function doNothing(value) {};

        //calculate(1).then(calculate).then(doNothing).then(verify1);
        calculate(1).then(function (r) {}).then(verify2);
    });

    it("can combine promises with all", function (done) {

        var slowExecutor = function slowExecutor(resolve, reject) {
            setTimeout(function () {
                resolve(9);
            }, 250);
        };

        var fastExecutor = function fastExecutor(resolve, reject) {
            setTimeout(function () {
                resolve(6);
            }, 100);
        };

        var p1 = new Promise(slowExecutor);
        var p2 = new Promise(fastExecutor);

        var p3 = Promise.all([p1, p2]);

        p3.then(function (result) {
            expect(result[0]).toBe(9);
            expect(result[1]).toBe(6);
            done();
        });
    });

    it("can wait for the first resolve with a race", function (done) {

        var slowExecutor = function slowExecutor(resolve, reject) {
            setTimeout(function () {
                resolve(9);
            }, 250);
        };

        var fastExecutor = function fastExecutor(resolve, reject) {
            setTimeout(function () {
                resolve(6);
            }, 100);
        };

        var p1 = new Promise(slowExecutor);
        var p2 = new Promise(fastExecutor);

        var p3 = Promise.race([p1, p2]);

        p3.then(function (result) {
            expect(result).toBe(6);
            done();
        });
    });

    it("can create a promise already in resolve state", function (done) {

        var doAsyncWork = function doAsyncWork() {
            return Promise.resolve(10);
        };

        doAsyncWork().then(function (result) {
            expect(result).toBe(10);
            done();
        });
    });

    it("can create a rejected promise", function (done) {
        var doAsyncWork = function doAsyncWork() {
            return Promise.reject("error!");
        };

        doAsyncWork().then(null, function (message) {
            expect(message).toBe("error!");
            done();
        });
    });

    it("provides catch API", function (done) {
        var doAsyncWork = function doAsyncWork() {
            return Promise.reject("error!");
        };

        doAsyncWork().then(function () {})["catch"](function (message) {
            expect(message).toBe("error!");
            done();
        });
    });

    it("unhandled error", function () {

        Promise.reject("error!");
        expect(true).toBe(true);
    });

    it("errors tunnel through", function (done) {

        var log = "";
        function doWork() {
            log += "W";
            return Promise.resolve();
        }

        function doError() {
            log += "E";
            throw new Error("oops!");
        }

        function catchHandler() {
            log += "T";
        }

        function errorHandler(error) {
            log += "H";
        }

        doWork().then(doWork).then(doError).then(doWork) // this will be skipped
        .then(doWork, errorHandler).then(verify);

        function verify() {
            expect(log).toBe("WWEH");
            done();
        }
    });

    (function () {

        // variables scope to the function

    })();
});