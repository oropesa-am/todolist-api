const { Todos } = require('../models')

module.exports = ({ text }) => {
    try {
        return Todos.create({
            text
        })
    } catch(error) {
        throw error
    }
}