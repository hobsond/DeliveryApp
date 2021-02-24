const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const port = 8080

dotenv.config({path:'./config/config.env'})
const MongoClient = require('mongodb').MongoClient

MongoClient.connect(uri, (err, client) => {
    if (err) {
        console.log('error', err)
        process.exit(0)
    }
    console.log('connected to db')
    const collection = client.db('delivery').collection('deliveryApp')
    app.get("/", (req, res) => {
      res.send("hello world");
    });
    app.listen(port, () => {
      console.log(`now listening on port : ${port}`);
    });
    client.close()
})
