const mongoose = require('mongoose')
const {Schema} = mongoose

const orchidSchema = new Schema({
    orchidGenera: String,
    orchidSpecies: String,
    growerName: String,
    careInfo: String,
    image: []
})

mongoose.model('orchids', orchidSchema)