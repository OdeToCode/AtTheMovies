// M3
(function() {
    
    
    
}());
    
// M2 B
(function () {

    var button = document.getElementById("getMovies");
    var click = Rx.Observable.fromEvent(button, "click");
    var getMovies = Rx.Observable.defer(function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "movies.json");
        xhr.send();
        return Rx.Observable.fromEvent(xhr, "load").map(function (event) {
            var request = event.currentTarget;

            if (request.status === 200) {
                return JSON.parse(request.responseText);
            } else if(request.status > 400) {
                throw new Error("Could not fetch movies");
            }
        });
    }).retry(3);
    
    var fetchMovies = Rx.Observable.defer(function() {
        return Rx.Observable.fromPromise(
            fetch("movies.json")
                .then(function(response) {
                    return response.json()
                })
        );      
    });
    
    click.flatMap(fetchMovies)      
         .subscribe(function(result) {
             var output = document.getElementById("output");
             result.forEach(function(movie) {               
                 var div = document.createElement("div");
                 div.innerText = movie.title;
                 document.body.appendChild(div);
             });
         }, function(error) {
            console.log(error);         
         }, function() {
            console.log("complete"); 
         });
    
} ());

// // M2 A
// (function () {

//     //var numbers = Rx.Observable.from([1,2,3]);

//     var numbers = new Rx.Subject();

//     numbers.subscribe(onNext, onError, onComplete);
//     numbers.map(function (n) {
//         return n * 100;
//     }).subscribe(onNext, onError, onComplete);


//     function onNext(value) {
//         console.log(value);
//     }

//     function onError(error) {
//         console.log(error);
//     }

//     function onComplete() {
//         console.log("complete");
//     }

//     Rx.Observable.interval(1000).subscribe(function () {
//         numbers.onNext(Math.random());
//     });

// } ());

// M1
// (function() {

//     var circle = document.getElementsByClassName("greeting")[0];

//     var source = Rx.Observable.fromEvent(document, "mousemove")
//                               .filter(function(e) {
//                                 return e.clientY < 100;
//                               })
//                               .map(function(e){
//                                  return {
//                                    x: e.clientX,
//                                    y: e.clientY  
//                                  };
//                               })
//                               .delay(300);

//     source.subscribe(onNext, onError, onCompleted);

//     function onNext(value) {
//         circle.style.left = value.x;
//         circle.style.top = value.y;
//     }

//     function onError() {
//         console.log();
//     }

//     function onCompleted() {
//         console.log("complete")
//     }

// }());