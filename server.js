const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const fs = require('fs')
const path = require('path')
require('dotenv/config')

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "ejs")

// Step 5 - set up multer for storing uploaded files

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({storage: storage})

const imgModel = require('./models');

// Step 7 - the GET request handler that provides the HTML UI

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err)
        }
        else {
            res.render('imagesPage', { items: items })
        }
    })
})
// Step 8 - the POST handler for processing the uploaded file

app.post('/', upload.single('image'), (req, res, next) => {

    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err)
        }
        else {
            // item.save();
            res.redirect('/')
        }
    })
})

// Step 9 - configure the server's port

const port = process.env.PORT || 5000
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})
