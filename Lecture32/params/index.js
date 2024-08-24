const express = require("express");
const app = express();

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`hello from ${subreddit}`)
})

app.get("/search", (req, res) => {
    const { name } = (req.query)
    res.send(`hello from ${name}`)
})

app.listen(3000, () => {
    console.log("Server start running at 3000 port")
})