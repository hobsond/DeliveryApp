const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
app.use(express.json())
const port = process.env.PORT|| 8080
// route files
const Menu  = require('./Routes/menuItems')

const connectDb = require('./config/db')
dotenv.config({ path: './config/config.env' })

connectDb()


app.get("/", (req, res) => {
  res.send("hello world");
});
app.use('/api/v1/menuItems',Menu)
const server = app.listen(port, () => {
  console.log(`now listening on port : ${port}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`unhandled : ${err.message}`)
    // close and exit process
    server.close(()=>process.exit(0))
})