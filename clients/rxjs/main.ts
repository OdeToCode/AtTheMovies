// M1

// step 1 - numbers


import {Observable} from "rxjs/Observable"; 

import "rxjs/add/operator/filter";




let source = Observable.create(observer => {
    let numbers = [1,2,3];
    let index = 0;
    let produceValue = () => {
        
        observer.next(numbers[index++]);

        if(index < numbers.length) {
            setTimeout(produceValue, 2000);
        }
        else {
            observer.complete();
        }
        
    };
    
    produceValue();
    
}).map(n => n * 2)
  .filter(n => n > 1);

class MyObserver {
    
    next(value: number) {
        console.log(value);
    }

    error(e) {
        console.log(e);
    }

    complete() {
        console.log("complete!");
    }

}

source.subscribe(new MyObserver());

// var subscriber = source.subscribe(
//     next => console.log(next),
//     error => console.log(error),
//     () => console.log("complete!")
// );


// import {Observable} from "rxjs"
// // // import "rxjs/add/observable/from";
// // // import "rxjs/add/observable/fromEvent";
// // // import "rxjs/add/operator/map";
// // // import "rxjs/add/operator/filter";
// // // import "rxjs/add/operator/delay";

// let source = Observable.from([1, 2, 3]);
// let source2 = source.zip(Observable.timer(2000, 2000), (n, t) => [n, t]);
                       

// source.subscribe(n => console.log(n),
//                      e => console.log(e),
//                      () => console.log("complete 1"));

// source2.subscribe(n => console.log(n),
//                      e => console.log(e),
//                      () => console.log("complete 2"));



// // const circle = document.getElementById("output");
// // const source = Observable.fromEvent(document, "mousemove")
// //                          .filter((e : MouseEvent) => e.clientY < 500)
// //                          .map((e : MouseEvent) => {
// //                               return {
// //                                  x: e.clientX,
// //                                  y: e.clientY
// //                              }
// //                          })
// //                          .delay(300);
                         
// // function onNext(value) {
// //     circle.style.left = value.x;
// //     circle.style.top = value.y;
// // }

// // function onError(error) {
// //     console.log(error);
// // }

// // function onCompleted() {
// //     console.log("complete")
// // }

// // source.subscribe(onNext, onError, onCompleted);



// // // // M3
// // // (function() {



// // // }());

// // // // M2 B
// // // (function () {

// // //     var button = document.getElementById("getMovies");
// // //     var click = Rx.Observable.fromEvent(button, "click");
// // //     var getMovies = Rx.Observable.defer(function () {
// // //         var xhr = new XMLHttpRequest();
// // //         xhr.open("GET", "movies.json");
// // //         xhr.send();
// // //         return Rx.Observable.fromEvent(xhr, "load").map(function (event) {
// // //             var request = event.currentTarget;

// // //             if (request.status === 200) {
// // //                 return JSON.parse(request.responseText);
// // //             } else if(request.status > 400) {
// // //                 throw new Error("Could not fetch movies");
// // //             }
// // //         });
// // //     }).retry(3);

// // //     var fetchMovies = Rx.Observable.defer(function() {
// // //         return Rx.Observable.fromPromise(
// // //             fetch("movies.json")
// // //                 .then(function(response) {
// // //                     return response.json()
// // //                 })
// // //         );      
// // //     });

// // //     click.flatMap(fetchMovies)      
// // //          .subscribe(function(result) {
// // //              var output = document.getElementById("output");
// // //              result.forEach(function(movie) {               
// // //                  var div = document.createElement("div");
// // //                  div.innerText = movie.title;
// // //                  document.body.appendChild(div);
// // //              });
// // //          }, function(error) {
// // //             console.log(error);         
// // //          }, function() {
// // //             console.log("complete"); 
// // //          });

// // // } ());

// // // // // M2 A
// // // // (function () {

// // // //     //var numbers = Rx.Observable.from([1,2,3]);

// // // //     var numbers = new Rx.Subject();

// // // //     numbers.subscribe(onNext, onError, onComplete);
// // // //     numbers.map(function (n) {
// // // //         return n * 100;
// // // //     }).subscribe(onNext, onError, onComplete);


// // // //     function onNext(value) {
// // // //         console.log(value);
// // // //     }

// // // //     function onError(error) {
// // // //         console.log(error);
// // // //     }

// // // //     function onComplete() {
// // // //         console.log("complete");
// // // //     }

// // // //     Rx.Observable.interval(1000).subscribe(function () {
// // // //         numbers.onNext(Math.random());
// // // //     });

// // // // } ());

