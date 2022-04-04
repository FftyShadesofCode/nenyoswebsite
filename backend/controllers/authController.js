const User = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body
    if (!user || !pwd)
        return res.status(400).json({ 'message': 'Email and Password are required.' })
    const foundUser = await User.findOne({ email: user }).exec()
    if (!foundUser)
        return res.sendStatus(401)
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        const accessToken = jwt.sign(
            { "user": foundUser.user },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        )
        const refreshToken = jwt.sign(
            { "user": foundUser.user },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        )
        foundUser.refreshToken = refreshToken
        const result = await foundUser.save()
        console.log(result)

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
        res.json({ accessToken })
    } else {
        res.sendStatus(401)
    }
}

module.exports = { handleLogin }