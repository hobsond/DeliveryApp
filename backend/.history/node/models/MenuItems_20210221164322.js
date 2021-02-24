const mongoose = require('mongoose');

const MenuItems = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please add Menu Name"]
    }
})