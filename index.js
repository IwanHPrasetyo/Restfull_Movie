require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routeApi = require("./src/api")
const fileUpload = require("express-fileupload")

app.use(express.static("./"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileUpload({createParentPath: true,  useTempFiles : true}));


const port = process.env.PORT || 8080

app.use('/', routeApi)

app.get("*", (request,response)=>{
    response.send("404 Not Found")
})

app.listen(port, () => console.log(`Backend started on port ${port}`))
