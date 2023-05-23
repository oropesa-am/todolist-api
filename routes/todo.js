const express = require('express')
const _ = require('lodash')

const {
    addTodo,
    getTodo,
    getAllTodos,
    updateTodo,
    deleteTodo
} = require('../api')

const routes = () => {
    const router = express.Router()

    router.get('/', async (req, res, next) => {
        const query = req.query

        return getAllTodos(query).then((results) => {
            res.json({
                data: results
            })
        }).catch(error => {
            next(error)
        })
    })


    router.get('/:id', async (req, res, next) => {
        const params = req.params

        return getTodo(params).then((result) => {
            res.json({
                data: result
            })
        }).catch(error => {
            next(error)
        })
    })

    router.post('/', (req, res, next) => {
        const body = req.body

        return addTodo(body).then((result) => {
            res.json({
                data: result,
                message: 'Successfully added.'
            })
        }).catch(error => {
            next(error)
        })
    })

    router.put('/:id', (req, res, next) => {
        const params = req.params
        const body = req.body

        return updateTodo({ ...params, ...body}).then((result) => {
            res.json({
                data: result,
                message: 'Successfully updated.'
            })
        }).catch(error => {
            next(error)
        })
    })

    router.delete('/:id', (req, res, next) => {
        const params = req.params

        return deleteTodo(params).then((result) => {
            res.json({
                message: 'Successfully deleted.'
            })
        }).catch(error => {
            next(error)
        })
    })

    return router
}

module.exports = routes