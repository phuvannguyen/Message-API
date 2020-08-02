'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _user = require('./user.validate');

var _validate = require('../../helpers/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose2.default.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        validate: [{ validator: _user.isUsername, msg: "Username must consist of only alphanumeric values with a length between 5 and 20 characters" }]
    },
    email: {
        type: String,
        index: true,
        unique: true,
        sparse: true,
        validate: [{ validator: _validate.isEmail, msg: 'Invalid email' }]
    },
    password: {
        type: String,
        validate: [{ validator: _user.isPassword, msg: "Password must have a minium of 4 characters" }]
    },
    passwordResetToken: String, //1000.
    passwordResetExpire: Date, //1000.
    github: { type: String, unique: true, sparse: true },
    google: { type: String, unique: true, sparse: true },
    tokens: [{
        _id: false,
        kind: String,
        accessToken: String
    }],
    profile: {
        name: String,
        avatar_url: String,
        location: String,
        gender: String,
        status: String

    }

}, { timestamps: true });

/**
 * hashing a password before saving it to the database
 */

userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// test a failing password

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

/**
 * Helper method for getting user's gravatar.
 */
function gravatar() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

    if (!this.email) {
        return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
    }
    var md5 = _crypto2.default.createHash('md5').update(this.email).digest('hex');
    return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
}
//validate Length and validateLength characters of Username

var Users = _mongoose2.default.model('Users', userSchema, "users");
exports.default = Users;