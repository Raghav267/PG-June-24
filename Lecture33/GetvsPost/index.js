const express = require("express");
const app = express();
const path = require("path")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/user", (req, res) => {
    console.log(req.query);
    res.send("Get Request Is sent.")
})

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("Post Request Is sent.")

})

app.listen(3000, () => {
    console.log("Server start running aat 3000 port.")
})