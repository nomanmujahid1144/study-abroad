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
    domainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Domain'
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
    featured: {
        type: Boolean,
        default: false
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
