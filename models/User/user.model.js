import  mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { isUsername, isPassword } from './user.validate';
import { isEmail } from '../../helpers/validate'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        validate: [{validator: isUsername, msg:"Username must consist of only alphanumeric values with a length between 5 and 20 characters"}]
    },
    email: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        validate: [{validator: isEmail, msg:'Invalid email'}]
    },
    password: {
        type: String,
        validate: [{validator: isPassword, msg: "Password must have a minium of 4 characters"}]
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

/**
 * hashing a password before saving it to the database
 */

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

 // test a failing password

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

/**
 * Helper method for getting user's gravatar.
 */
function gravatar(size = 200) {
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
}
//validate Length and validateLength characters of Username

const Users = mongoose.model('Users', userSchema, "users");
export default Users;
