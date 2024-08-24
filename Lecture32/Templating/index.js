const express = require("express");
const app = express();
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/hello/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.render("hello", { subreddit })
})

app.listen(3000, (req, res) => {
    console.log("Serve start runnit at 3000 port!");
})