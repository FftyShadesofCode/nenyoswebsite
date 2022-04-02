const express = require('express')
const router = express.Router()
// const path = require('path')
const orchidsController = require('../../controllers/orchidsController')

router.route('/')
    .get(orchidsController.getAllOrchids)
    .post(orchidsController.createNewOrchid)
    .put(orchidsController.updateOrchids)
    .delete(orchidsController.deleteOrchid)

router.route('/:id')
    .get(orchidsController.getOrchid)

module.exports = router