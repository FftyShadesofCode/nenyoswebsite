const mongoose = require('mongoose')
const Users = mongoose.model('users')

module.exports = (users) => {

    users.get(`/api/users`, async (req, res) => {
        let users = await Users.find()
        return res.status(200).send(users)
    });

    users.post(`/api/users`, async (req, res) => {
        let users = await Users.create(req.body)
        return res.status(201).send({
            error: false,
            users
        })
    })

    users.put(`/api/users/:id`, async (req, res) => {
        const {id} = req.params

        let users = await Users.findByIdAndUpdate(id, req.body)

        return res.status(202).send({
            error: false,
            users
        })

    })

    users.delete(`/api/users/:id`, async (req, res) => {
        const {id} = req.params

        let users = await Users.findByIdAndDelete(id)

        return res.status(202).send({
            error: false,
            users
        })

    })

}