const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("My First Middleware");
    next();

})

app.use((req, res, next) => {
    console.log("My Second Middleware.")
})

app.get("/", (req, res, next) => {
    res.send("Hello from App.get")
})


app.listen(3000, () => {
    console.log("Server Started");
})