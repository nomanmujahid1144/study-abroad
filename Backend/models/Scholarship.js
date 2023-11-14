const mongoose = require('mongoose');
const Scholarship = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    country: {
        type: String,
        default: '',
        trim: true
    },
    degree: {
        type: String,
        default: ''
    },
    field: {
        type: String,
        default: '' 
    },
    intake: {
        type: String,
        default: ''
    },
    document: {
        type: Object,
        default: {}
    },
    image: {
        type: String,
        default : ''
    },
    
},
    { timestamps: true })

module.exports = mongoose.model('Scholarship', Scholarship);
