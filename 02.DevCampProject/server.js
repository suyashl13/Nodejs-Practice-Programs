const express = require('express')
const dotenv = require('dotenv')
const logger = require('./logger')

const app = express()

// Route files
const bootcamps = require('./routes/bootcamps')

// load env vars
dotenv.config({path:'./config/config.env'})
app.use(logger)

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000;

app.listen(PORT, 
    console.log("Server Started on PORT : " + PORT)
);