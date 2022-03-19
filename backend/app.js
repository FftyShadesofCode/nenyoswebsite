const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URI,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('AYYOOOOOOO!!!')
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Orchids Blooming on Plant ${PORT}`)
})
