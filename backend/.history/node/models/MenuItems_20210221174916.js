const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const menuScheme = new mongoose.Schema({
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
        type: Decimal128,
        default:0.00
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

module.export = mongoose.model('menuScheme', menuScheme)