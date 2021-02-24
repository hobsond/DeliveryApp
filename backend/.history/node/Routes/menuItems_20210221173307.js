const express = require('express');
const router = express.Router()
const { getMenuItems,createMenu } = require('../controllers/MenuController');
router.route('/').get(getMenuItems).post(createMenu)
module.exports = router