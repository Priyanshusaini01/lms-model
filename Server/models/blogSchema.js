const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    linkedinId:{
        type:String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    liked_user: {
        type: [String],
        default: []
    },
    status:{
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Blog', blogSchema);