const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/user");
const session = require("express-session");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://127.0.0.1:27017/auth-demo")
    .then(() => console.log("DB connected"))
    .catch((e) => console.log("Error:" + e))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.get("/", (req, res) => {
    res.send("We are learnign Auth");
})

app.get("/register", (req, res) => {
    res.render("signup");
})

app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    if (password.trim().length < 4) {
        return res.send("Password is too smll");
    }

    const foundUser = await User.findOne({ username });
    console.log(foundUser);

    if (foundUser) {
        return res.send("Username already taken");
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    await User.create({ username, hash });
    res.redirect("login");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.listen(3000, () => {
    console.log("Server started")
})