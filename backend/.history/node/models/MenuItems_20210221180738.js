const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const uid = require('uid');

const MenuScheme = new mongoose.Schema({
    id:uid(),
    title: {
        type: String,
        required: [true, "Please add Menu Name"],
        unique: true,
        trim: true,
    },
    slug: String,
    description: {
        type: String,
        required: [true,'Must have a descriptions']
    },
    price: {
        type: Number,
        default:0
    },
    timeToPrep:{
        type:Number,
        default:120
    },
    timeToCook :{
        type:Number,
        default:120
    },
    timeToHandle:{
        type:Number,
        default:120
    },
    

})

module.exports = mongoose.model('MenuItem', MenuScheme)