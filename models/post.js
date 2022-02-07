const mongoose = require('mongoose');

//init schema
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        trime: true,
        require: true
    },
    author:{
        type: String,
        trime: true,
        require: true
    },
    description:{
        type: String,
        trim: true,
        require: true
    }
});

//init

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
