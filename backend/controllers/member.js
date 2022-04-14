const Member = require('../models/membership')

exports.addMemberID = (req, res, next, id) => {
    Member.findById(id).exec((err, data) => {
        if(err) {
            return res.status(400).json({
                message: 'No Member Found'
            })
        }
        req.member = data
        next()
    })
}

exports.addMember = (req, res) => {

}