const mongoose = require('mongoose');
const Accommodation = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref : 'User'
    },
    country: {
        type: String,
        default: '',
        trim: true
    },
    city: {
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

module.exports = mongoose.model('Accommodation', Accommodation);
