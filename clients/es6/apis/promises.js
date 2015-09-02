describe("promises", function () {

    it("compares to callbacks", function (done) {

        let executor = function (callback) {

            setTimeout(() => {
                callback("This is the result");
            }, 0);

        };

        executor(result => {
            expect(result).toBe("This is the result");
            done();
        });

    });

    it("producer consumer style", function (done) {

        let calculate = function () {

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(96);
                }, 0);    
            });
        };

        let success = function(result) {
            expect(result).toBe(96);
            done();  
        };
        
        let error = function(reason) {
            // ... error handling code for a rejected promise  
        };

        let promise = calculate();
        promise.then(success, error);

    });


    it("will provide function to reolve or reject", function (done) {

        let executor = function (resolve, reject) {

            setTimeout(() => {
                resolve(96);
            }, 0);

        };

        let promise = new Promise(executor);
        promise.then(result => {
            expect(result).toBe(96);
            done();
        });

    });

    it("can combine promises with all", function (done) {

        let slowExecutor = function (resolve, reject) {
            setTimeout(() => {
                resolve(9);
            }, 250);
        };

        let fastExecutor = function (resolve, reject) {
            setTimeout(() => {
                resolve(6);
            }, 100);
        };

        let p1 = new Promise(slowExecutor);
        let p2 = new Promise(fastExecutor);

        let p3 = Promise.all([p1, p2]);

        p3.then(result => {
            expect(result[0]).toBe(9);
            expect(result[1]).toBe(6);
            done();
        });

    });

    it("can wait for the first resolve with a race", function (done) {

        let slowExecutor = function (resolve, reject) {
            setTimeout(() => {
                resolve(9);
            }, 250);
        };

        let fastExecutor = function (resolve, reject) {
            setTimeout(() => {
                resolve(6);
            }, 100);
        };

        let p1 = new Promise(slowExecutor);
        let p2 = new Promise(fastExecutor);

        let p3 = Promise.race([p1, p2]);

        p3.then(result => {
            expect(result).toBe(6);
            done();
        });

    });

    it("can create a promise already in resolve state", function (done) {

        let doAsyncWork = function () {
            return Promise.resolve(10);
        };

        doAsyncWork().then(result => {
            expect(result).toBe(10);
            done();
        });

    });

    it("can create a rejected promise", function (done) {
        let doAsyncWork = function () {
            return Promise.reject("error!");
        };

        doAsyncWork().then(() => { }, message => {
            expect(message).toBe("error!");
            done();
        });
    });

    it("provides catch API", function (done) {
        let doAsyncWork = function () {
            return Promise.reject("error!");
        }

        doAsyncWork().then(() => { })
            .catch(message => {
                expect(message).toBe("error!");
                done();
            });

    });



});
