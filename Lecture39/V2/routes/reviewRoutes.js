const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Review = require("../models/Review");

router.post("/products/:productid/review", async (req, res) => {
    const { productid } = req.params;
    const { rating, comment } = req.body;

    // finding the products,
    const product = await Product.findById(productid);

    //creating a review
    const review = await Review.create({ rating, comment });

    //adding the review to reviews array
    product.reviews.push(review);

    // saving the reviw the in DB
    await review.save();

    // saving the product
    await product.save();

    res.redirect(`/products/${productid}`);


})

module.exports = router;