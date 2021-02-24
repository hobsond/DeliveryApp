const mongoose = require('mongoose')

const connectDb = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology:true
    })
    console.log('mongo db connected')
}
module.exports = connectDb