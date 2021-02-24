const { Decimal128 } = require('bson');
const mongoose = require('mongoose');

const MenuItems = new mongoose.Schema({
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
    timeToPrep:Number,
    timeToCook :Number,
    timeToHandle:Number,
    

})

module.export = mongoose.model('menuItems',MenuItems)