// function hof(callback, y) {
//     callback();
//     console.log("x and y are fucntion")

// }
// function add() {
//     console.log("I add's the two digits")
// }
// hof(add);
// console.log("F is higher order functions")


// function f() {
//     function innerfun() {
//         console.log("I am inner fun");
//     }
//     return innerfun;
// }
// const val = f();
// val();

// function sqauareNum(num)
// {
//     return Math.sqrt(num);
// }

const sqauareNum = num => Math.sqrt(num);

console.log(sqauareNum(16));