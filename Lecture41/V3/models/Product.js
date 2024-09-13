const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    desc: String,
    price: Number,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

module.exports = mongoose.model("Product", productSchema);