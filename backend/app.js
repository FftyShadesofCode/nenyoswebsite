const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/api.route");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))


mongoose.connect(process.env.MONGO_URI,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('AYYOOOOOOO!!!')
})

app.use('/api', router)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Orchids Blooming on Plant ${PORT}`)
})
