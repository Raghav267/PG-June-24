const express = require("express");
const app = express();
const session = require("express-session");

const sessionConfig = {
    secret: 'we need a better secret',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig))

app.get("/", (req, res) => {
    res.send("We are learning sessions")
})

app.get("/setusername", (req, res) => {
    req.session.username = req.query;
    console.log(req.session.username);
    res.send("We have set the username.")
})

app.get("/greet", (req, res) => {
    const {username} = req.session.username;
    console.log(typeof (username));
    // res.send(`Hello ${username} we are learning Express-Session.`)
    res.send("Hello " + { username } + " we are learning Express-Session");
})

app.listen(3000, () => {
    console.log("Server Started.")
})