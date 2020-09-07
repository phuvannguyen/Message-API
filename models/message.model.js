

import  mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    chat: {
        type: mongoose.Types.ObjectId,
        ref: "Chat",
        required: 'Chat is required'

    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    content: String,
    // type defines the sort of content that this message will contain, to
    // identify the stored content:
    // plain: standard text.
    // code: a programming snippet.
    
    deletedAt: Date,
    

}, {timestamps: true});

messageSchema.index({createdAt: true})
const Messages = mongoose.model('messages', messageSchema, "messages");
export default Messages;