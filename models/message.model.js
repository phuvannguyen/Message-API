var mongoose = require('mongoose');


var messageSchema = mongoose.Schema({
    chat: Ref,
    ower: Ref,
    content: String,
    type: String,
    specifics: {
        language: Ref,
        hightlight: Ref,
        chat: Ref
    }
    deletedAt: Date,
    createdAt: Date,
    modifiedAt: Date

});

var Messages = mongoose.model('Messages', roomSchema, "messages");
export default Messages;