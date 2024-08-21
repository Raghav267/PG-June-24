const express = require("express");
const app = express();

// https://www.facebook.com/usersq?=name%3Aharshpass%3A1234
// console.log(app);
// app.use((req, res) => {
//     console.log("Inside the App.use()");
//     // console.log(req);
//     res.status(500).send("hello from server.")
// })


app.get("/cat", (req, res) => {
    res.send("Meow Meow!!!!")
})

app.post("/cat", (req, res) => {
    res.send("Meow Meow from post request.")
})

app.get("/dog", (req, res) => {
    res.send("Wooof wooff!!")
})

app.get("/", (req, res) => {
    res.send("Homee routes")
})

app.post("/", (req, res) => {
    res.send("We hande the post request.")
})

app.get("*", (req, res) => {
    res.send("Wildcard Route")
})



app.listen(3000, () => {
    console.log("Server starts running at 3000 port");
})