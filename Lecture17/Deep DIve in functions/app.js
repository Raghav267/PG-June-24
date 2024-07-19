// console.log(a);
// var a = 100;
// function b() { // we recahed the other functions
//     console.log(c);
//     var c = 77;
// }
// b();

// Global Execution Context is created
// 1. MCp 2. Cep

// a = undifened, b =  {
//     var c = 77;
//     console.log(c);
// }


// Global Execution Context is created
// 1. MCp 2. Cep
// c  = 77;
//


var a = 200;
// var c = 277;
function b() {
    c = 277;
    console.log(c);

    function d() {
        console.log("Inside d");
        c = c + 1; // we are able to access c here due to closure property
        console.log(c);
    }
    d();
}



console.log(a);
b();
// c = c + 1;
// console.log(c);
// 200 277  Inside d

// functions with its lexical enviromnet forms the closure 