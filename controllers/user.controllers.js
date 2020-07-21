const User = require('../models/User/user.model')


module.exports.index = async function(req, res) {
	const users = await User.find()
	res.json(users)
}

module.exports.create = async function(req, res) {
	const user = await User.create(req.body);
	res.json(user)
}