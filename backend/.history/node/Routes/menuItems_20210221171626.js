const express = require('express');
const router = express.Router()
const { getMenuItems } = require('../controllers/MenuController');
router.route('/').get(getMenuItems)
module.exports = router