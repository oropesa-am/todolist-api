const express = require('express')
const _ = require('lodash')

const {
    addTodo
} = require('../api')

const routes = () => {
    const router = express.Router()

    router.get('/', async (req, res) => {
        res.send('Get Todo')
    })

    router.post('/create', (req, res, next) => {
        const body = req.body
        const text = _.has(body, 'text') ? body.text : undefined
        
        return addTodo({ text }).then(() => {
            res.send('Successfully added.')
        }).catch(error => {
            next(error)
        })
    })

    router.put('/update/:id', (req, res) => {
        res.send('Update Todo')
    })

    router.delete('/delete/:id', (req, res) => {
        res.send('Delete Todo')
    })

    return router
}

module.exports = routes