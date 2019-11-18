require('dotenv').config()


module.exports={
    database:{
        postgres:{
                user: process.env.PGUSER,
                host: process.env.PGHOST,
                database: process.env.PGDATABASE,
                password: process.env.PGPASSWORD,
                port: process.env.PGPORT,
        }
    }

}

