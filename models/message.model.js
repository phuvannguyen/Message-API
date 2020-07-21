import  mongoose from 'mongoose';



const messageSchema = mongoose.Schema({
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
        language: { type: String, enum: ['plain', 'markdown', 'html', 'javascript', 'css']},
        hightlight: {type: String},
        //Use with "fork"
        chat: {type: Schema.ObjectId, ref: "Chat"}
    },
    deletedAt: Date,
    

}, {timestamps: true});

messageSchema.index({createdAt: true})
const Messages = mongoose.model('Messages', roomSchema, "messages");
export default Messages;