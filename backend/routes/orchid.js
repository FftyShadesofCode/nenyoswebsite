const express = require('express')
const router = express.Router()

router.get('/orchids', (req, res) => {
    res.json({
        time: Date().toString()
    })
})

module.exports = router