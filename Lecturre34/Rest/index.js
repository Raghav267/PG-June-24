const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [
    {
        id: uuid(),
        user: "Akshansh",
        text: "Nice Phone"
    },
    {
        id: uuid(),
        user: "Sadhvi",
        text: "Nice Battery Back-up"
    }, {
        id: uuid(),
        user: "Manish",
        text: "We are part of june batch."
    }
]

/// getting all the comments
app.get("/comments", (req, res) => {
    res.render("index", { comments });
})

// getting a form for creating comment
app.get("/comments/new", (req, res) => {
    res.render("new")
})

// creating a comment
app.post("/comments", (req, res) => {
    const { user, comment } = req.body;
    comments.push({ id: uuid(), user, text: comment });
    res.redirect("/comments")
})

// showing a particular comment.
app.get("/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    console.log(commentId)
    const foundComment = comments.find((c) => c.id === (commentId))
    res.render("show", { foundComment })
})

//Gettign a edit form
app.get("/comments/:commentId/edit", (req, res) => {
    const { commentId } = req.params;
    const foundComment = comments.find((c) => c.id === (commentId))
    res.render("edit", { c: foundComment })
})

//Updating a prticular comment // put and patch
app.patch("/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    const foundComment = comments.find((c) => c.id === (commentId))
    // objects are refernce type
    foundComment.user = req.body.user;
    foundComment.text = req.body.comment;
    res.redirect("/comments");
})

// deleting a comment
app.delete("/comments/:commentId", (req, res) => {
    const { commentId } = req.params;
    const newComments = comments.filter((c) => commentId !== (c.id));
    comments = newComments;
    res.redirect("/comments")
})

app.listen(3000, () => {
    console.log("Server start running at 3000  port.")
}) 