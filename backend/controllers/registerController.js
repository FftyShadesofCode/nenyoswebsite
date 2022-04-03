const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body
    if (!user || !pwd)
        return res.status(400).json({ 'message': 'Email and Password are required.' })
    const duplicate = usersDB.users.find(person => person.user === user)
    if (duplicate)
        return res.sendStatus(409)
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10)

        const newUser = { "user": user, "password": hashedPwd }
        usersDB.setUsers([...usersDB.users, newUser])
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        )
        res.status(201).json({ 'success': `User ${user} created!`})
    } catch (err) {
        res.status(500).json({ 'message': err.message })
    }
}

module.exports = { handleNewUser }