const express = require("express")
const Route = express.Router()

const categoryController = require("../Controller/categories")

Route
.get("/", categoryController.getCategories)
.post("/add", categoryController.addCategories)
.delete("/delete", categoryController.addCategories)


module.exports = Route