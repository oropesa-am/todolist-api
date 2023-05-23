const { Todos } = require('../models')
const _ = require('lodash')


module.exports = (payload) => {
    try {
        const id = _.has(payload, 'id') ? payload.id : null

        return Todos.findOne({
            where: { id }
        })
    } catch(error) {
        throw error
    }
}