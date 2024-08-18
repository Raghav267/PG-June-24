const givemeajoke = require("give-me-a-joke");
const color = require("colors");
const figlet = require("figlet")

givemeajoke.getRandomDadJoke((joke) => {
    figlet("Himashu das", function (err, data) {
        console.log(data.yellow);
    });
});

// figlet("Hello World!!", function (err, data) {
//     console.log(data);
// });