const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/junebatchproject")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("Error in Connecting the DB" + err));

app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(productRoutes);

app.listen(3000, () => {
    console.log("Sever Started.")
})