let User = require('../models/user.model')


module.exports.index = async function(req, res) {
	let users = await User.find()
	res.json(users)
}

module.exports.create = async function(req, res) {
	let user = await User.create(req.body);
	res.json(user)
}