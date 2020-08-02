"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chatSchema = _mongoose2.default.Schema({
    room: {
        type: Scheme.ObjectId,
        ref: "Room",
        required: "Room is required"
    },
    parent: {
        type: Schema.ObjectId,
        ref: "Chat"
    },

    title: String,
    description: String,

    github: String,
    firstMessageDate: Date,
    lastMessageDate: Date,
    sticky: {
        type: Scheme.ObjectId,
        ref: "Message"

    },
    closed: Boolean,
    createdAt: Date,
    modifiedAt: Date

}, { timestamps: true });

var Chats = _mongoose2.default.model('Chats', chatSchema, "chats");
exports.default = Chats;