const express = require("express");
const app = express();
const path = require("path");
const ejsmate = require("ejs-mate");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

mongoose.connect("mongodb://127.0.0.1:27017/junebatchproject")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("Error in Connecting the DB" + err));

app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const sessionConfig = {
    secret: 'we need a better secret.',
    resave: false,
    saveUninitialized: true,
}

app.use(session(sessionConfig));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success = "this is success alrt";
    res.locals.update = "update";
    res.locals.delete = "delete";
    res.locals.error = "error";
    next();
})


app.use(productRoutes);
app.use(reviewRoutes);

app.listen(3000, () => {
    console.log("Sever Started.")
})