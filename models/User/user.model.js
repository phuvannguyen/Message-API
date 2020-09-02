import  mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        
    },
    email: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        
    },
    password: {
        type: String,
        
    },
    passwordResetToken: String, //1000.
    passwordResetExpire: Date, //1000.
    github: { type: String, unique: true, sparse: true},
    google: { type: String, unique: true, sparse: true},
    tokens: [{
        _id: false,
        kind: String,
        accessToken: String,
    }],
    profile: {
        name: String,
        avatar_url: String,
        location: String,
        gender: String,
        status: String

    }
       	    
    
}, {timestamps: true});



const Users = mongoose.model('Users', userSchema, "users");
export default Users;
