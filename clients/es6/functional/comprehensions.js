describe("array comprehensions", function(){

    it("can create arrays", function(){

        let range = function*(start, end){
            for(var i = start; i <= end; i++){
                yield i;
            }
        };

        //let n1 = [for (x of range(0,3)) x];
        // expect(n1).toEqual([0,1,2,3]);

        // let n2 = [for (x of range(0,3)) if(x<2) x];
        // expect(n2).toEqual([0,1]);

        // let n3 = [for (x of range(0,3)) if(x>0) x * x];
        // expect(n3).toEqual([1,4,9]);

        // let n4 = [for (x of range(0,1)) for (y of range(0,1)) x+y];
        // expect(n4).toEqual([0,1,1,2]);
        // expect(n4.next).toBeUndefined();

        // let n5 = [for (x of "abc") for (y of "123") x+y];
        // expect(n5).toEqual(["a1"]);

    });
});

describe("generator comprehensions", function(){

    it("can create iterables", function(){

        let range = function*(start, end){
            for(var i = start; i <= end; i++){
                yield i;
            }
        };

        // let n1 = (for (x of [1,2,3]) x);
        // expect(n1.next).toBeDefined();
        // expect(Array.from(n1)).toEqual([1,2,3]);

    });

});