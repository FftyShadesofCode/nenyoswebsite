const express = require('express')
const router = require('express').Router();
const OrchidPost = require('../models/OrchidPost')

router.get('/', (req, res) => {

  OrchidPost.find({  })
      .then((data) => {
        console.log('Data', data)
        res.json(data)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
})

router.post('/uploader', (req, res) => {
  const dbConnect = dbo.getDb()
  const matchDocument = {

  }

  const newOrchidPost = new OrchidPost(data);

  newOrchidPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
      return;
    }
    // OrchidPost
    return res.json({
      msg: 'Your orchid has bloomed!'
    });
  })
})

router.get('/name', (req, res) => {
  const data =  {
    username: 'peterson',
    age: 5
  };
  res.json(data);
});

module.exports = router;
