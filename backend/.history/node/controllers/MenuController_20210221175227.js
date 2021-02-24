const MenuModel = require('../models/MenuItems')
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
    console.log(body)
    const Item = await MenuModel.create(body)
    res.status(201).json({
        success: true,
        data:Item
    })
    res.status(200).json({success:true,msg:'shows all the menu Items '})
}