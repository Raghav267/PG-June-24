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
    req.flash("success", "Product added Succefully.")
    res.redirect("/products");
})

router.get("/products/:productid", async (req, res) => {
    const { productid } = req.params;
    const product = await Product.findById(productid).populate("reviews");
    res.render("product/show", { product });
})

router.get("/products/:productid/edit", async (req, res) => {
    const { productid } = req.params;
    const product = await Product.findById(productid);
    res.render("product/edit", { product });
})

router.patch("/products/:productid", async (req, res) => {
    const { productid } = req.params;
    const { name, price, img, desc } = req.body;
    await Product.findByIdAndUpdate(productid, { name, price, img, desc });
    req.flash("update", "Product Updated Succefully")
    res.redirect(`/products/${productid}`)
})

router.delete("/products/:productid", async (req, res) => {
    const { productid } = req.params;
    await Product.findByIdAndDelete(productid);
    req.flash("delete", "Product deleted")
    res.redirect("/products");

})

module.exports = router;