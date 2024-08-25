const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

let comments = [
    {
        id: 1,
        user: "Akshansh",
        text: "Nice Phone"
    },
    {
        id: 2,
        user: "Sadhvi",
        text: "Nice Battery Back-up"
    }
]


app.get("/comments", (req, res) => {
    res.render("index", { comments });
})

app.get("/comments/new", (req, res) => {
    res.render("new")
})

app.post("/comments", (req, res) => {
    const { user, comment } = req.body;
    comments.push({ id: comments.length + 1, user, text: comment });
    res.redirect("/comments")
})


app.listen(3000, () => {
    console.log("Server start running at 3000  port.")
}) 