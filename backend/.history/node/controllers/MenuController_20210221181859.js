const MenuScheme = require('../models/MenuItems')
// @desc
// @route
// @Access
exports.getMenuItems = async (req, res, next) => {
    try {
        const menuItems = await MenuScheme.find()
        res.status(201).json({ success: true, data: menuItems })
        
    }
    catch (err) {
        
        res.status(401).json({success:false,msg:err.message})
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
        res.status(400).json({success:false,msg:err.message})
        console.log('Error')
    }

    console.log(body);

 
}