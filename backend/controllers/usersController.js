const data = {
    users: require('../data/users.json'),
    setUsers: function (data) { this.users = data}
}

const getAllUsers = (req, res) => {
    res.json(data.users)
}

const createNewUser = (req, res) => {
    const newUser = {
        id: data.users[data.users.length - 1].id + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    if (!newUser.firstName || !newUser.lastName) {
        return res.status(400).json({ 'message': 'First and Last names are required.' })
    }

    data.setUsers([...data.users, newUser])
    res.status(201).json(data.users)
}

const updateUser = (req, res) => {
    const user = data.users.find(user => user. parseInt(req.body.id))
    if (!user) {
        return res.status(400).json({ "message": `User ${req.body.id} not found.`})
    }
    if (req.body.firstName) user.firstName = req.body.firstName
    if (req.body.lastName) user.lastName = req.body.lastName
    const filteredArray = data.users.filter(user => user.id !== parseInt(req.body.id))
    const unsortedArray = [...filteredArray, user]
    data.setUsers(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.users)
}

const deleteUser = (req, res) => {
    const user = data.users.find(user => user.id === parseInt(req.body.id))
    if (!user) {
        return res.status(400).json({ "message": `User ${req.body.id} not found.`})
    }
    const filteredArray = data.users.filter(user => user.id !== parseInt(req.body.id))
    data.setUsers([...filteredArray])
    res.json(data.users)
}

const getUser = (req, res) => {
    const user = data.users.find(user => user.id === parseInt(req.params.id))
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