import  mongoose from 'mongoose';


const chatSchema = mongoose.Schema({
    room: {
        type: Scheme.ObjectId,
        ref: "Room",
        required: "Room is required"
    },
    parent: {
        type: Schema.ObjectId,
        ref: "Chat",
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

},{timestamps: true});

const Chats = mongoose.model('Chats', chatSchema, "chats");
export default Chats;