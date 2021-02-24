const MenuScheme = require('../models/MenuItems')
const ErrorResponse = require('../utils/errorResponse')
// @desc
// @route
// @Access
exports.getMenuItems = async (req, res, next) => {
    try {
        const menuItems = await MenuScheme.find()
        res.status(201).json({ success: true, data: menuItems })
        
    }
    catch (err) {
        
        // res.status(401).json({success:false,msg:err.message})
        next(err)
    }
}
// @desc
// @route
// @Access
exports.createMenu = async (req, res, next) => {
    var body = req.body
    try {
        
    
    const Item = await MenuScheme.create(body)
    res.status(201).json({
        success: true,
        data:Item
    })
        console.log('success')
    }
       
    catch (err) {
        // res.status(400).json({success:false,msg:err.message})
        next(new ErrorResponse("Duplicate Item",401))
    }

    console.log(body);

 
}

// @desc
// @route
// @Access
exports.findById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await MenuScheme.findById(id)
        res.status(201).json({ success:true,data:item})

        
    }
    catch (err) {
        next(new ErrorResponse('Not found in Database',401))
        
    }
}
// @desc
// @route
// @Access
exports.updateById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body

        const item = await MenuScheme.findByIdAndUpdate(id,update)
        // res.status(201).json({ success:true,data:item})

        
    }
    catch (err) {
        next(new ErrorResponse('Not found in Database',401))
        
    }
}
// @desc
// @route
// @Access
exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await MenuScheme.findByIdAndRemove(id)
        res.status(201).json({ success:true,data:item})

        
    }
    catch (err) {
        next(new ErrorResponse('Not found in Database',401))
        
    }
}