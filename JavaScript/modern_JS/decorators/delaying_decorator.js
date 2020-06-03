function decoratorDelay(f, ms) {

    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}


function f(x) {
    console.log(x);
}

let fOne = decoratorDelay(f, 1000);
let fTwo = decoratorDelay(f, 1500);

fOne("test"); // shows "test" after 1000ms
fTwo("test"); // shows "test" after 1500ms