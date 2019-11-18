const conn = require("../Auth/db")


module.exports ={

    getMovie : (data)=>{

        data.name = typeof data.name !== "undefined" ? data.name : "";
        data.limit = typeof data.limit !== "undefined" ? data.limit : 4;
        data.sortBy = typeof data.sortBy !== "undefined" ? data.sortBy : "name";
        data.sortType = typeof data.sortType !== "undefined" ? data.sortType : "ASC";

        return new Promise((resolve, reject)=>{

            conn.query(`SELECT m.id_movie, m.name, c.name_category, m.image, m.description, m.releases, m.video  FROM "Movie" as m join  "Category" as c on m.id_category = c.id_category where m.name like '%${data.name}%' order by ${data.sortBy} ${data.sortType} limit ${data.limit}`, (error, results)=>{
                
                if(!error){
                    resolve(results.rows)
                }
                else{
                    reject(new Error(error))
                }

            })


        })
    },

    addMovie : data =>{

        return new Promise((resolve, reject) =>{
        conn.query(`select * from "Category" where name_category = '${data.name_category}'`,(err,res)=>{
            if(!err){

                conn.query(`insert into "Movie" (id_movie, name, id_category, image, description, releases, video) values ($1, $2, $3, $4, $5, 'NOW()', $6)`, [data.id_movie, data.name, res.rows[0].id_category, data.picture, data.description, data.video], (error, results) =>{

                    if(!error){
                        resolve(results)
                    }
                    else{
                        reject(new Error(error))
                    }
    
                })

            }else{
                reject(new Error(error))
            }
            
        })
        })

    },

    deleteMovie : id_movie =>{

        return new Promise((resolve, reject)=>{
            conn.query(`Delete from "Movie" where id_movie = '${id_movie}'`, (error, results) =>{

                if (!error) {
                    resolve(results)
                }
                else{
                    reject(new Error(error))
                }

            })
        })

    },

    updateMovie : data =>{

       return new Promise((resolve, reject)=>{
           conn.query(`Update "Movie" set name = '${data.name}', id_category = '${data.id_category}', image = '${data.image}', description = '${data.description}', releases = '${data.releases}' where id_movie = '${data.id_movie}'`, (error, results)=>{

            if (!error) {
                resolve(results)
            } else {
                reject(new Error(error))
            }
           })
       }) 

    },

    detailMovie : data =>{

        console.log(data.id_movie)

        return new Promise((resolve, reject)=>{
            conn.query(`SELECT m.id_movie, m.name, c.name_category as category, m.image, m.description, m.releases, m.video FROM "Movie" as m join "Category" as c on m.id_category = c.id_category where id_movie = '${data.id_movie}'`, (error, results)=>{

                if (!error) {
                    resolve(results.rows)
                }else{
                    reject(new Error(error))
                }

            })
        })

    }

}