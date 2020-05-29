var mongoose = require('mongoose');

var webhookSchema = mongoose.Schema({
    type: {
        type: String,
        required: "Type is required",
        enum: ['github']
    }, // github
    uid: { type: String, required: "Unique identifier is required"}, 
    github: {
        event: String,
        action: String,
        repository: String,

        issue: {
            number: Number,
            title: String,
            user: String,
            state: String,
            locked: Boolean,
            body: String

        },

        comment: {
            id: Number,
            user: String,
            body: String
        },

        pull_request: {
            number: Number,
            state: String,
            locked: Boolean,
            title: String,
            user: String,
            body: String,
            merged: Boolean,
            commits: Number,
            additions: Number,
            deletions: Number,
            changed_files: Number,
        },

        commits: [{
            id: String,
            tree_id: String,
            distinct: Boolean,
            message: String,
            timestamp: Date,
            url: String,
        }],

        head_commit: {
            id: String,
            tree_id: String,
            distinct: Boolean,
            message: String,
            timestamp: Date,
            url: String,
        },

        pusher: {
            name: String,
            email: String
        },
    },      	    
    
}, { timestamp: true});

webhookSchema.index({type:1, uid:1}, {unique: true})

const WebHook = mongoose.model('WebHook', webhookSchema, "webHook");
export default WebHook;
