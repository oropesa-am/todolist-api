const express = require('express')

const routes = () => {
    const router = express.Router()

    router.get('/', (req, res) => {
        res.send('Get Todo')
    })

    router.post('/create', (req, res) => {
        res.send('Create Todo')
    })

    router.put('/update', (req, res) => {
        res.send('Update Todo')
    })

    router.delete('/delete', (req, res) => {
        res.send('Delete Todo')
    })

    return router
}

module.exports = routes