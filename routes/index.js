const express = require('express')

const routes = () => {
    const router = express.Router()

    router.use('/todo', require('./todo')())

    return router
}

module.exports = routes
