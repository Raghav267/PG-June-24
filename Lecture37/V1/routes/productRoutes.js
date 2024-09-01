const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("product/index", { products });
})

router.get("/products/new", (req, res) => {
    res.render("product/new");
})

router.post("/products", async (req, res) => {
    const { name, price, img, desc } = req.body;
    await Product.create({ name, price, img, desc });
    res.redirect("/products");
})

module.exports = router;