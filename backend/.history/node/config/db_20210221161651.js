const mongoose = require('mongoose')

const connectDb =  () => {
    const connect = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false
    })
        .then(conn => conn)
    .catch(err=>console.log('err'))
    console.log('mongo db connected')
}
module.exports = connectDb