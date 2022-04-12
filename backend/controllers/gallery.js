const Formidable = require('formidable-serverless')
const fs = require('fs')
const Gallery = require("../models/gallery");

exports.getImageID = (req, res, next, id) => {
    Gallery.findById(id).exec((err, data) => {
        if(err)
        {
            return res.status(400).json({
                message: 'No Image Found'
            })
        }
        req.image = data
        next()
    })
}

exports.addImage = (req, res) => {
    const form = new Formidable()

    form.parse(req, (error, fileds, files) => {
        if(files?.image)
        {
            const gallery = new Gallery()

            gallery.photo.data = fs.readFileSync(files?.image.path)
            gallery.photo.contentType = files.image.type

            gallery.save((err, data) => {
                if(err)
                {
                    return res.status(400).json({
                        error: 'Unable to save image'
                    })
                }
                res.json(data)
            })
        }
    })
}

exports.getAllImages = (req, res) => {
    Gallery.find().sort({createdAt: '-1'}).exec((err, data) => {
        if(err || data.length === 0)
        {
            return res.status(400).json({
                error: 'Unable to find images'
            })
        }
        res.json(data)
    })
}

exports.getImage = (req, res) => {
    res.set('Content-Type', req.image.photo.contentType)
    return res.send(req.image.photo.data)
}