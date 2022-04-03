const data = {
    user: require('../model/user.json'),
    setUser: function (data) { this.user = data}
}

const getAllUsers = (req, res) => {
    res.json(data.user)
}

const createNewUser = (req, res) => {
    const newUser = {
        id: data.user[data.user.length - 1].id + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    if (!newUser.firstName || !newUser.lastName) {
        return res.status(400).json({ 'message': 'First and Last names are required.' })
    }

    data.setUser([...data.user, newUser])
    res.status(201).json(data.user)
}

const updateUser = (req, res) => {
    const user = data.user.find(user => user. parseInt(req.body.id))
    if (!user) {
        return res.status(400).json({ "message": `User ${req.body.id} not found.`})
    }
    if (req.body.firstName) user.firstName = req.body.firstName
    if (req.body.lastName) user.lastName = req.body.lastName
    const filteredArray = data.user.filter(user => user.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray, user]
    data.setUser(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.user)
}

const deleteUser = (req, res) => {
    const user = data.user.find(user => user.id === parseInt(req.body.id))
    if (!user) {
        return res.status(400).json({ "message": `User ${req.body.id} not found.`})
    }
    const filteredArray = data.user.filter(user => user.id !== parseInt(req.body.id))
    data.setUser([...filteredArray])
    res.json(data.user)
}

const getUser = (req, res) => {
    const user = data.user.find(user => user.id === parseInt(req.params.id))
    if (!user) {
        return res.status(400).json({ "message": `User ${req.params.id} not found.`})
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