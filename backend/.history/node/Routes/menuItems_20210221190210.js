const express = require('express');
const router = express.Router()
const { getMenuItems,createMenu,findById,deleteById,updateById } = require('../controllers/MenuController');
router.route('/').get(getMenuItems).post(createMenu)
router.route('/:id').get(findById).delete(deleteById).put(updateById)
module.exports = router