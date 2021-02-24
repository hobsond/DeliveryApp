const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const port = 8080
const connectDb = require('./config/db')
dotenv.config({ path: './config/config.env' })

connectDb()


app.get("/", (req, res) => {
  res.send("hello world");
});
const server = app.listen(port, () => {
  console.log(`now listening on port : ${port}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`unhandled : ${er}`)
})