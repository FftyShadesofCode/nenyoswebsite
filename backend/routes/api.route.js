const express = require('express')
const router = require('express').Router();
const OrchidPost = require('../models/OrchidPost')

router.get('/orchids', async (req, res) => {
  const posts = await OrchidPost.find()
  res.send(posts)
})

router.post('/orchids', async (req, res) => {
  const post = new OrchidPost ({
    name: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    orchid: {
      orchidGenera: req.body.orchidGenera,
      orchidSpecies: req.body.orchidSpecies,
      basicInformation: {
        fragrant: req.body.fragrant,
        careInformation: {
          water: req.body.water,
          light: {
            lightIntensity: req.body.lightIntensity,
            lightType: req.body.lightType,
          },
          temp: req.body.temp,
          humidity: req.body.humidity,
        },
        images: req.body.images,
      },
    },
  })
  await post.save()
  res.send(post)
})

router.get('/orchids/:id', async (req, res) => {
  try {
  const post = await OrchidPost.findOne({ _id: req.params.id })
  res.send(post)
} catch {
    res.status(404)
    res.send({error: 'Orchid not in Bloom!'})
  }
})

router.patch('/orchids/:id', async( req, res) => {
  try {
    const post = await OrchidPost.findOne({ _id: req.params.id })

    if (req.body.firstName + req.body.lastName) {
      post.name = req.body.firstName + req.body.lastName
    }

  if (req.body.orchidGenera + req.body.orchidSpecies) {
    post.orchidName = req.body.orchidGenera + req.body.orchidSpecies
  }

  await post.save()
    res.send(post)
} catch {
  res.status(404)
  res.send({ error: 'Orchid never Bloomed!' })
  }
})

router.delete('/orchids/:id', async (req, res) => {
  try {
    await OrchidPost.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: 'Orchid never Bloomed!' })
  }
})

router.get('/name', (req, res) => {
  const data =  {
    username: 'peterson',
    age: 5
  };
  res.json(data)
})

module.exports = router
