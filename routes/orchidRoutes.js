const mongoose = require('mongoose')
const Orchids = mongoose.model('orchids')

module.exports = (orchids) => {

    orchids.get(`/api/orchids`, async (req, res) => {
        let orchids = await Orchids.find()
        return res.status(200).send(orchids)
    });

    orchids.post(`/api/orchids`, async (req, res) => {
        let orchids = await Orchids.create(req.body)
        return res.status(201).send({
            error: false,
            orchids
        })
    })

    orchids.put(`/api/orchids/:id`, async (req, res) => {
        const {id} = req.params

        let orchids = await Orchids.findByIdAndUpdate(id, req.body)

        return res.status(202).send({
            error: false,
            orchids
        })

    })

    orchids.delete(`/api/orchids/:id`, async (req, res) => {
        const {id} = req.params

        let orchids = await Orchids.findByIdAndDelete(id)

        return res.status(202).send({
            error: false,
            orchids
        })

    })

}