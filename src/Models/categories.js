const conn = require("../Auth/db")

module.exports ={

    getCategory: () => {
        return new Promise((resolve, reject) => {
          conn.query(`select * from "Category"`, (err, result) => {
            if (!err) {
              resolve(result.rows);
            } else {
              reject(new Error(err));
            }
          });
        });
      },

      addCategory : data =>{

        return new Promise((resolve, reject) =>{

            conn.query(`insert into "Category" (id_category, name_category) values ($1, $2)`, [data.id_category, data.name_category], (error, results) =>{

                if(!error){
                    resolve(results)
                }
                else{
                    reject(new Error(error))
                }

            })

        })

    },

    deleteCategory : id_category =>{

        return new Promise((resolve, reject)=>{
            conn.query(`Delete from "Category" where id_category = '${id_category}'`, (error, results) =>{

                if (!error) {
                    resolve(results)
                }
                else{
                    reject(new Error(error))
                }

            })
        })

    },


}