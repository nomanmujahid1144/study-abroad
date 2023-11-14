const mongoose = require('mongoose');
const Blog = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    blogHeading: {
        type: String,
        default: ''
    },
    blogImage: {
        type: String,
        default: ''
    },
    data: {
        type: String,
        default: ''
    },
    metaTitle: {
        type: String,
        default: ''
    },
    metaDescription: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    metaTags: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
},
    { timestamps: true })

module.exports = mongoose.model('Blogs', Blog);
