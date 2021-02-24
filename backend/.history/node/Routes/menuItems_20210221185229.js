const express = require('express');
const router = express.Router()
const { getMenuItems,createMenu,findById } = require('../controllers/MenuController');
router.route('/').get(getMenuItems).post(createMenu)
router.route('/:id').get(findById)
module.exports = router