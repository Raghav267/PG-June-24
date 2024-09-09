const express = require("express");
const app = express();

app.use((req, res, next) => {
    req.username = 'harsh';
    console.log("My first Middleware.");
    return next();
    console.log("Inside First Middleware after the next()");

})

app.use((req, res, next) => {
    console.log(req.username);
    console.log("My second Middleware.");
    next();
})

app.get("/", (req, res) => {
    res.send("Hello");
})

const verify = (req, res, next) => {
    const { passsword } = req.query;
    if (passsword === 'apple') {
        return next();
    }
    res.send("Invalid password.");
}

app.get("/secret", verify, (req, res) => {
    res.send("I wear headphones whenevr i am in public because i dont want to consume there junk content.")
})


app.listen(3000, () => {
    console.log("Server Started at 3000 port.")
})
