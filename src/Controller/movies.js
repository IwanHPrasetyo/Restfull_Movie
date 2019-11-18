require('dotenv').config()
const movieModel = require("../Models/movies")
const uuidv1 = require("uuid/v1")
const conn = require("../Auth/db")
const mv = require("mv");
const fs = require("fs");
const cloudinary = require("cloudinary").v2


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


module.exports = {

    getMovie : (request, response)=>{

        const {name, limit, sortBy, sortType} = request.query

        const data = {name, limit, sortBy, sortType}

        movieModel.getMovie(data)
        .then(resultQuery =>{
            response.json({
                status: 200,
                message: "Show data success",
                data : resultQuery
            })
        })
        .catch(error =>{
            response.json({
                status: 500,
                message: "Show data fail"
            })
        })
    },
     addMovie : (request, response)=>{

        if (!request.files || Object.keys(request.files).length === 0) {
            return response.status(400).send("no file uploaded");
          }
      
          let img = request.files.image
          let vid = request.files.video
          let filetype = img.mimetype
          let filetypevideo = vid.mimetype
          
          
          if (
            filetype !== "image/png" &&
            filetype !== "image/gif" &&
            filetype !== "image/jpeg" &&
            filetypevideo !== "video/mp4" 
          ) {
            return response.status(400).send("format image or video not support");
          }

          if (filetypevideo == "video/mp4") {
            type = "mp4";
          }
      
          var id = Math.floor(Math.random() * 10) + 4;
          let video = "video-" + Date.now() + "-" + id + "." + type;
      
          vid.mv("public/video/" + video, err => {
            if (err) {
              return response.status(500).send(err);
              response.send("Sukses upload");
            }
          });
          

        var picture = ""
        
        const str = "";
        const id_movie = uuidv1(null, str, 15)
        
        var {name, name_category, description} = request.body
        var data = {id_movie, name, picture, name_category, description, video}
       

        movieModel.addMovie(data)
        .then(()=>{

            cloudinary.uploader.upload(img.tempFilePath, (error, result)=>{
                if (!error) {   
                picture = result.url
                conn.query(`update "Movie" set image ='${picture}' where id_movie ='${data.id_movie}'`, (er, rs)=>{
                      if(!er){
                        console.log('upload image finish')  
                      }
                      else{
                        console.log('upload image fail')
                      }
                })  
                }
            })

            response.json({
                status: 200,
                message: "Add data success",
                data : data.name
            })
        })
        .catch(error =>{
            response.json({
                status: 500,
                message: "Add data fail"

            })
        })

        
    

    },

    deleteMovie : (request, response)=>{

        const {id_movie} = request.query

        movieModel.deleteMovie(id_movie)
        .then(()=>{
            response.json({
                status: 200,
                message: "Delete data success"
            })
        })
        .catch(error =>{
            response.json({
                status: 500,
                message: "Delete data fail"
            })
        })


    },
    updateMovie : (request, response) =>{

        const id_movie = request.params.id
        const {name, id_category, image, description, releases} = request.body
        const data = {id_movie,name, id_category, image, description, releases}

        movieModel.updateMovie(data)
        .then(()=>{
            response.json({
                status: 200,
                message : "update success",
                data : data
            })
        })
        .catch(()=>{
            response.json({
                status: 500,
                message: "update fail"
            })
        })

    },

    detailMovie : (request, response) =>{

        const data = request.query

        movieModel.detailMovie(data)
        .then((resultQuery)=>{
            response.json({
                status: 200,
                message: "get detail movie",
                data : resultQuery,
                stream : process.env.URL+process.env.PORT+"/public/video/"+resultQuery[0].video
            })
        })
        .catch(()=>{
            response.json({
                status: 500,
                message: "get detail fail"
            })
        })

    }

}
