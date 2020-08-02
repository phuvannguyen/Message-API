'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageSchema = _mongoose2.default.Schema({
    chat: {
        type: Schema.ObjectId,
        ref: "Chat",
        required: 'Chat is required'

    },
    owner: {
        type: Schema.ObjectId,
        ref: "Users"
    },
    content: String,
    // type defines the sort of content that this message will contain, to
    // identify the stored content:
    // plain: standard text.
    // code: a programming snippet.
    type: {
        type: String,
        enum: ["plain", "code", "fork"],
        required: "Type is required"
    },

    specifics: {
        language: { type: String, enum: ['plain', 'markdown', 'html', 'javascript', 'css'] },
        hightlight: { type: String },
        //Use with "fork"
        chat: { type: Schema.ObjectId, ref: "Chat" }
    },
    deletedAt: Date

}, { timestamps: true });

messageSchema.index({ createdAt: true });
var Messages = _mongoose2.default.model('Messages', roomSchema, "messages");
exports.default = Messages;