const mongoose = require('mongoose');
const Blogs = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
},
    {timestamps: true} 

);

module.exports = mongoose.model('blogs', Blogs);