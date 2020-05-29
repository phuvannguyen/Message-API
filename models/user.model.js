var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_pic: {
    	type: String,
    	required: false
    },
    status: {
    	type: String,
    	required: false
    },
    password: {
    	type: String,
    	required: true
    },    	    
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Users = mongoose.model('Users', userSchema, "users");
export default Users;
