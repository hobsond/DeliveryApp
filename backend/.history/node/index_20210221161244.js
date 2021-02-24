const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const port = 8080
const connectDb = require('./config/db')
dotenv.config({path:'./config/config.env'})


app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`now listening on port : ${port}`);
});