

(function() {
    
    var circle = document.getElementsByClassName("greeting")[0];
   
    var source = Rx.Observable.fromEvent(document, "mousemove")
                              .filter(function(e) {
                                return e.clientY < 100;
                              })
                              .map(function(e){
                                 return {
                                   x: e.clientX,
                                   y: e.clientY  
                                 };
                              })
                              .delay(300);
    
    source.subscribe(onNext, onError, onCompleted);
    
    function onNext(value) {
        circle.style.left = value.x;
        circle.style.top = value.y;
    }
    
    function onError() {
        console.log();
    }
    
    function onCompleted() {
        console.log("complete")
    }
    
}());