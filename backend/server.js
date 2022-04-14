require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')

// Models
const Member = require('./models/membership')

// route import
const authRoutes = require('./routes/auth')
const growerRoutes = require('./routes/grower')
const galleryRoutes = require('./routes/gallery')
const orchidRoutes = require('./routes/orchid')

// application
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// db
mongoose.connect(process.env.DATABASE_CLOUD, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() =>
    console.log("Connected to Yer MOM!"))
    .catch(() =>
        console.log("DB Connection Error"))

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: `${process.env.CLIENT_URL}`
    }))
}

//routes middleware
app.use('/growers/signup', authRoutes)
app.use('/growers', growerRoutes)
app.use('/orchids', orchidRoutes)
app.use('/galleries', galleryRoutes)

//Mongo MembersList
app.post('/addMember', (req, res) => {
    const memberObj = {
        '_id': new mongoose.Types.ObjectId(),
        'lastName': req.body.lastName,
        'firstName': req.body.firstName,
        'address': req.body.address,
        'city': req.body.city,
        'state': req.body.state,
        'zipCode': req.body.zipCode,
        'phoneNumber': req.body.phoneNumber,
        'emailAddress': req.body.emailAddress
    }
    const newMember = new Member(memberObj)

    newMember.save((err, member) => {
        if(err)
            res.status(400).send('There was an error while adding new Member')
        else
            res.status(200).json(member)
    })
})


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Orchids Blooming on Plant ${port}`)
})