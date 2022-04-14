const express = require('express')
const router = express.Router()

router.post('/addmember', (req, res) => {
    const memberObj = {
        '_id': new mongoose.Types.ObjectId(),
        'lastName': req.body.lastName,
        'firstName': req.body.firstName
    };
})

module.exports = router