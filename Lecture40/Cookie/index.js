const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("this is not a good secret."));

app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/setcookies", (req, res) => {
    res.cookie("mode", "dark", { httpOnly: true, expires: new Date(Date.now() + 4000) });
    res.cookie("username", "harsh");
    res.send("Sent you a cookie.");
})

app.get("/hello", (req, res) => {
    res.send("We are checking the cookie.")
})

app.get("/viewcookies", (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
})
app.get("/greet", (req, res) => {
    const { username } = req.cookies;
    res.send(`HEllo from ${username}`);
})

app.get("/signedcookie", (req, res) => {
    res.cookie('fruie', 'apple', { signed: true });
    res.send(req.cookies)
})

app.listen(3000, () => {
    console.log("Server Started at 3000 port.");
})