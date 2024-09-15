const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true
    },
    hash: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("User", userSchema);