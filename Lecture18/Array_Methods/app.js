// const array1 = [1, 4, 9, 16];
// // const sqrtarray = [];
// // for (let num of array1) {
// //     const ans = Math.sqrt(num);
// //     sqrtarray.push(ans);

// // }

// console.log(sqrtarray);

// MAp method

// const newArray = array1.map((elements) => {
//     return Math.sqrt(elements);
//     // console.log(elements);
// })

// console.log(newArray)



//Filter Method

// const numarray = [12, 26, 14, 12, 35, 3, 15, 188, 12, 36, 17, 13, 15, 16, 18, 20];

// const evenArray = numarray.filter((elements) => {
//     return (elements % 2 == 0 ? true : false)
// })

// console.log(evenArray)


// Reduce Method


const numarray = [12, 26, 14, 12, 35, 3, 15, 188, 12, 36, 17, 13, 15, 16, 18, 20];
const sum = numarray.reduce((acc, curr) => {
    // console.log(acc);
    // console.log(curr)
    return acc + curr;
}, 0)

console.log(sum)
