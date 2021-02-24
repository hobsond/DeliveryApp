const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const slugify = require('slugify')
const MenuScheme = new mongoose.Schema({
    
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
    vegan: {
        type: Boolean,
        default:false
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
    createdAt: {
        type: Date,
        default:Date.now
    }

})
// create slug from the name
MenuScheme.pre("save", function (next) {
    this.slug = slugify(this.title,{lower:true})
    console.log('slugify Ran')
    next()
})

module.exports = mongoose.model('MenuItem', MenuScheme)