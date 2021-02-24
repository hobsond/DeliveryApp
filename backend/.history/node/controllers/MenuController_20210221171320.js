// @desc
// @route
// @Access
exports.getMenuItems = (req, res, next) => {
    res.status(200).json({success:true,msg:'shows all the menu Items'})
}