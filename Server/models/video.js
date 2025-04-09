const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    courseTitle:{
        type: String,
        required: true
    },
    videoPath:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('VideoSchema', videoSchema)