function f() {
    console.log("Hello!");
}

function sayHi() {
    console.log('Hi');
}
  
Function.prototype.defer = function(time) {
    setTimeout(this, time);
}

f.defer(1000) ;

sayHi.defer(2000);