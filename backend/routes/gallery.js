const express = require('express')
const {addImage, getAllImages, getImageID, getImage} = require("../controllers/gallery");
const router = express.Router()

router.param('imageId', getImageID)
router.post('/add/image', addImage)
router.get('/images', getAllImages)
router.get('/image/:imageId', getImage)

module.exports = router