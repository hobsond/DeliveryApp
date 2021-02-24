const Model = require('../models/MenuItems')
// @desc
// @route
// @Access
exports.getMenuItems = (req, res, next) => {
    res.status(200).json({success:true,msg:'shows all the menu Items '})
}
// @desc
// @route
// @Access
exports.createMenu = (req, res, next) => {
    var body = req.body
    console.log(body)
    res.status(200).json({success:true,msg:'shows all the menu Items '})
}