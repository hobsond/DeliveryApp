var https = require('https')
const express = require('express')
const app = express()
const port = 8080
const MongoClient = require('mongodb').MongoClient
const uri =
  "mongodb+srv://hobsond:69Je$us@cluster0.z2x35.mongodb.net/delivery?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, client) => {
    if (err) {
        console.log('error',err)
    }
    console.log('connected')
    const collection = client.db('delivery').collection('deliveryApp')
    console.log(collection)
    client.close()
})
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`now listening on port : ${port}`)
})