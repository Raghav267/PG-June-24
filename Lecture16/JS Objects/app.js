// const person = {
//     firstName: "Harsh",
//     lastName: "Raghav",
//     age: 23,
//     occupation: "Sw Engineer",
//     favColor: ["Black", "White"]
// }

// console.log(person)
// console.log(`${person.firstName} ${person.lastName}`)

// console.log(person["age"] + person["occupation"])

// console.log(typeof (person.age))
// console.log(person.favColor[1])


//  Loops in Javascript;

// 1-10;
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)

// types of js are\\


// for loop
// Initilisation ; Stopping condtion ; Increment 
// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }

const fruits = ["Kiwi", "Litchi", "Banana", "Guava", "WaterMelon"];

// for (let it = 0; it < arr.length; it++) {
//     console.log(arr[it])
// }

// for of loop

// for (fruit of fruits) {
//     console.log(fruit);
// }

const str = "We are learning loops";

// for (s of str) {
//     console.log(s);
// }


// for in loop


const person = {
    firstName: "Harsh",
    lastName: "Raghav",
    age: 23,
    occupation: "Sw Engineer",
    favColor: ["Black", "White"]
}

// for (key of person) {
//     // console.log("key");
//     console.log(key);
// }

// person is not iterable


for (abc in person) {
    console.log(`${abc} : ${person[abc]}`);
}

