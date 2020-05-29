var mongoose = require('mongoose');


var roomSchema = mongoose.Schema({
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
        
}, {timestamps: true});

var Rooms = mongoose.model('Rooms', roomSchema, "rooms");
export default Rooms;