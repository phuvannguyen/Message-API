'use strict';

var User = require('../models/User/user.model');

module.exports.index = async function (req, res) {
	var users = await User.find();
	res.json(users);
};

module.exports.create = async function (req, res) {
	var user = await User.create(req.body);
	res.json(user);
};