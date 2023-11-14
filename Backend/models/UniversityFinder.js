const mongoose = require('mongoose');
const UniversityFinder = new mongoose.Schema({
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
    education: {
        degree: {
            type: String,
            default: ''
        },
        marks: {
            type: Number,
            default: 0
        }
    },
    intake: {
        type: String,
        default: ''
    },
    englishTest: {
        testName: {
            type: String,
            default: ''
        },
        bands: {
            type: Number,
            default: 0
        }
    },
    apptitudeTest: {
        testName: {
            type: String,
            default: ''
        },
        marks: {
            type: Number,
            default: 0
        }
    },
    workExperience: {
        isExperience: {
            type: Boolean,
            default: false
        },
        yearsOfExperience: {
            type: Number,
            default: 0
        }
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

module.exports = mongoose.model('UniversityFinder', UniversityFinder);
