const MenuScheme = require('../models/MenuItems')
// @desc
// @route
// @Access
exports.getMenuItems = (req, res, next) => {
    res.status(200).json({success:true,msg:'shows all the menu Items '})
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