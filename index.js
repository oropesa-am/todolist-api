const express = require('express')

const app = express()
const port = process.env.port || 3005

app.get('/', (req, res) => {
    res.send('TODO LIST API')
})

app.listen(port, () => {
    console.log(`This application is running on port ${port}`)
})