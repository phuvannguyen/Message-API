"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roomSchema = _mongoose2.default.Schema({
    tittle: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    description: String,

    owner: {
        type: Schema.ObjectId,
        ref: "Users",
        required: "Owner is required",
        index: true
    },
    member: [{
        type: Schema.ObjectId,
        ref: "Users",
        index: true
    }]

}, { timestamps: true });

var Rooms = _mongoose2.default.model('Rooms', roomSchema, "rooms");
exports.default = Rooms;