"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listChat = undefined;

var _room = require("../models/room.model");

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = async function _ref(req, res) {
    await _room2.default.find({ member: _room2.default.member.find(function (member) {
            return member === req.body.username;
        }) }, function (err, result) {
        if (err) {
            res.send(err);
        };
        res.json(result);
    });
};

var listChat = _ref.listChat;
exports.listChat = listChat;