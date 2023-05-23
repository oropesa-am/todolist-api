const { Todos } = require('../models')
const _ = require('lodash')

module.exports = (payload) => {
    try {
        const id = _.has(payload, 'id') ? payload.id : null
        const text = _.has(payload, 'text') ? payload.text : null

        return Todos.findOne({
            where: { id }
        }).then(async instance => {
            if(!instance) {
                throw new Error('Todo not found.')
            }
            instance.set({
                text
            })
            await instance.save()
            return instance
        })
    } catch(error) {
        throw error
    }
}