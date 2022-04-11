const express = require('express')
const router = express.Router()

router.get('/growers', (req, res) => {
    res.json({
        time: Date().toString()
    })
})

module.exports = router