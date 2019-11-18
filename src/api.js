const express = require('express')
const Route = express.Router()

const Movies = require('./routes/movies')
const Categories = require('./routes/categories')


 Route
 .use("/movies", Movies)
 .use("/categories", Categories)


module.exports = Route


