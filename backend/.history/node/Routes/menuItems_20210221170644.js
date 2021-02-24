const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
    res.send('your connected ')
})
module.exports = router