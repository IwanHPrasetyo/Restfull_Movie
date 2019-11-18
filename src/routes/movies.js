const express = require("express")
const Route = express.Router()

const movieController = require("../Controller/movies")

Route.get("/", movieController.getMovie)
Route.get("/detail", movieController.detailMovie)
Route.post("/add", movieController.addMovie)
Route.delete("/delete", movieController.deleteMovie)
Route.patch("/update/:id", movieController.updateMovie)


module.exports = Route