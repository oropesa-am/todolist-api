const { Todos } = require('../models')
const _ = require('lodash')

module.exports = (payload) => {
    try {
        const page = _.has(payload, 'page') ? payload.page : 1
        const pageSize = _.has(payload, 'pageSize') ? payload.pageSize : 10
        const sortName = _.has(payload, 'sortName') ? payload.sortName : 'createdAt'
        const sortOrder = _.has(payload, 'sortOrder') ? payload.sortOrder : 'DESC'
        const offset = pageSize ? pageSize * (page - 1) : 0

        return Todos.findAndCountAll({
            offset,
            limit: pageSize,
            order: [[sortName, sortOrder]]
        })
    } catch(error) {
        throw error
    }
}