const { Pool } = require('pg')
const config = require('./config')

const pool = new Pool(config.database.postgres)

pool.connect(err =>{
    var result = (err ? "error connection": "DB Connected" ) 
    
    console.log(result)
})

module.exports = pool