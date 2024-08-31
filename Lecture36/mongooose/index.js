const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/junebatch')
    .then(() => {
        console.log("DB connected.")
    })
    .catch((err) => console.log("Error in connnecting the db."))

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    year: Number,
    isWatched: Boolean
});

const Movie = mongoose.model("Movie", movieSchema);

const Noman = new Movie({ name: "Something", year: 2015, isWatched: true });

Noman.save();