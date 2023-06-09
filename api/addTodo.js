const { Todos } = require('../models')
const _ = require('lodash')

module.exports = (payload) => {
    try {
        const text = _.has(payload, 'text') ? payload.text : null

        return Todos.create({
            text
        })
    } catch(error) {
        throw error
    }
}