const express = require('express')
require('dotenv').config() 

const routes = () => {
    const router = express.Router()

    router.use('/todo', require('./todo')())

    return router
}

module.exports = routes
