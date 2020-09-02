import  mongoose from 'mongoose';


const chatSchema = mongoose.Schema({
    receiverId: {
        type: Scheme.ObjectId
        
    },
    isGroup: Boolean,
    parent: {
        type: Schema.ObjectId,
        ref: "Chat",
    },

    title: String,
    description: String,
    
    firstMessageDate: Date,
    lastMessageDate: Date,    
    
    

},{timestamps: true});

const Chats = mongoose.model('Chats', chatSchema, "chats");
export default Chats;