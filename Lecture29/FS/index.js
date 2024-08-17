const fs = require('fs');

fs.readFile("./abc.txt", {
    encoding: 'utf-8',
    flag: "r"
}, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
    console.log("File read Succesfully.")

})

console.log("We are here.")