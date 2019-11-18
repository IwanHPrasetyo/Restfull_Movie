
const categoryModel = require("../Models/categories")
const uuidv1 = require("uuid/v1")

module.exports = {
getCategories : (request, response)=>{


    categoryModel.getCategory()
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

addCategories : (request, response)=>{

    const str = "";
    const id_category = uuidv1(null, str, 15)
        
    var {name_category} = request.body
    var data = {id_category, name_category}

    

    categoryModel.addCategory(data)
    .then(resultQuery =>{
        response.json({
            status: 200,
            message: "Add data success",
            data : data
        })
    })
    .catch(error =>{
        response.json({
            status: 500,
            message: "Add data fail"
        })
    })
},

deleteCategories : (request, response)=>{

    const {id_category} = request.query

    categoryModel.deleteCategory(id_category)
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


}


}