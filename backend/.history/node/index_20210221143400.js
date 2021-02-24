var https = require('https')
const express = require('express')
const app = express()
const port = 8080
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`now listening on port : ${port}`)
})