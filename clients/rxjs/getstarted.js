(function() {
    
    var source = Rx.Observable.fromEvent(document, "mousemove")
                              .filter(function(e) {
                                return e.clientY < 100;
                              })
                              .map(function(e){
                                 return {
                                   x: e.clientX,
                                   y: e.clientY  
                                 };
                              });
    
    source.subscribe(onNext, onError, onCompleted);
    
    function onNext(value) {
        console.log(value);
    }
    
    function onError() {
        console.log();
    }
    
    function onCompleted() {
        console.log("complete")
    }
    
}());