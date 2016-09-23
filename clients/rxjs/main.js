"use strict";
const rxjs_1 = require("rxjs");
require("whatwg-fetch");
let button = document.getElementById("getMovies");
let output = document.getElementById("output");
let click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    return rxjs_1.Observable.create(observer => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function () {
            if (xhr.status < 400) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            }
            else {
                observer.error(xhr.statusText);
            }
        });
        xhr.open("GET", url);
        xhr.send();
    }).retryWhen(retryStategy());
}
function loadWithFetch(url) {
    return rxjs_1.Observable.fromPromise(fetch("movies.json")
        .then(function (response) {
        return response.json();
    }));
}
function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
function retryStategy(attempts = 3, delay = 1000) {
    return function (errors) {
        return errors.scan((acc, value) => {
            console.log(acc, value);
            return acc + 1;
        }, 0)
            .takeWhile(v => v < attempts)
            .delay(delay);
    };
}
click.flatMap(e => load("moviess.json"))
    .subscribe(renderMovies, error => console.log(error), () => console.log("complete"));
// (function () {
//     var button = document.getElementById("getMovies");
//     var click = Rx.Observable.fromEvent(button, "click");
//     var getMovies = Rx.Observable.defer(function () {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "movies.json");
//         xhr.send();
//         return Rx.Observable.fromEvent(xhr, "load").map(function (event) {
//             var request = event.currentTarget;
//             if (request.status === 200) {
//                 return JSON.parse(request.responseText);
//             } else if(request.status > 400) {
//                 throw new Error("Could not fetch movies");
//             }
//         });
//     }).retry(3);
//     var fetchMovies = Rx.Observable.defer(function() {
//         return Rx.Observable.fromPromise(
//             fetch("movies.json")
//                 .then(function(response) {
//                     return response.json()
//                 })
//         );      
//     });
//     click.flatMap(fetchMovies)      
//          .subscribe(function(result) {
//              var output = document.getElementById("output");
//              result.forEach(function(movie) {               
//                  var div = document.createElement("div");
//                  div.innerText = movie.title;
//                  document.body.appendChild(div);
//              });
//          }, function(error) {
//             console.log(error);         
//          }, function() {
//             console.log("complete"); 
//          });
// } ());
// import {Observable} from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter";
// let numbers = [1, 5, 10];
// let source = Observable.create(observer => {
//     let index = 0;
//     let produceValue = () => {
//         observer.next(numbers[index++]);
//         if(index < numbers.length) {
//             setTimeout(produceValue, 250);
//         }
//         else {
//             observer.complete();
//         }
//     }
//     produceValue();
// }).map(n => n * 2)
//   .filter(n => n > 4);
// source.subscribe(
//     value => console.log(`value: ${value}`),
//     e => console.log(`error: ${e}`),
//     () => console.log("complete")   
// );
// const circle = document.getElementById("output");
// const source = Observable.fromEvent(document, "mousemove")
//                          .filter((e : MouseEvent) => e.clientY < 500)
//                         //  .map((e : MouseEvent) => {
//                         //       return {
//                         //          x: e.clientX,
//                         //          y: e.clientY
//                         //      }
//                         //  })
//                          .delay(300);
// source.subscribe(v => console.log(v));            
// function onNext(value) {
//     circle.style.left = value.x;
//     circle.style.top = value.y;
// }
// function onError(error) {
//     console.log(error);
// }
// function onCompleted() {
//     console.log("complete")
// }
// source.subscribe(onNext, onError, onCompleted);
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
// // // //     //var numbers = Rx.Obse rvable.from([1,2,3]);
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
//# sourceMappingURL=main.js.map