const User = require('../model/User')

const getAllUsers = async (req, res) => {
    const users = await User.find()
    if (!users)
        return res.status(204).json({'message': 'No users found.'})
}

const createNewUser = async (req, res) => {
    if (!req?.body?.firstName || !req?.body?.lastName) {
        return res.status(400).json({'message': 'First and Last Names are required.'})
    }

    try {
        const result = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        res.status(201).json(result)
    } catch (err) {
        console.error(err)
    }
}

const updateUser = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.'})
    }

    const user = await User.findOne({ _id: req.body.id }).exec()
    if (!user) {
        return res.status(204).json({ "message": `No user matches ID ${req.body.id}`})
    }
    if (req.body?.firstName) user.firstName = req.body.firstName
    if (req.body?.lastName) user.lastName = req.body.lastName
    const result = await user.save()
    res.json(result)
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id)
        return res.status(400).json({ 'message': 'User ID required.' })
    const user = await User.findOne({ _id: req.body.id }).exec()
    if (!user) {
        return res.status(204).json({ "message": `No user matches ID ${req.body.id}`})
    }
    const result = await user.deleteOne({ _id: req.body.id })
    res.json(result)
}

const getUser = async (req, res) => {
    if (!req?.params?.id)
        return res.status(400).json({'message': 'User ID required.'})
    const user = await User.findOne({_id: req.params.id}).exec()
    if (!user) {
        return res.status(204).json({ "message": `No user matches ID ${req.params.id}`})
    }
    res.json(user)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUser
}