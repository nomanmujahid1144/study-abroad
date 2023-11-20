const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new mongoose.Schema({
    fullName: {
        type: String,
        default: ''
    },
    profilePhoto: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please add a valid email'
        ],
        unique: [true, "This email already exists"],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    phoneIsVerified: {
        type: Boolean,
        default: false
    },
    geometry : {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
    },
    formattedAddress:{
        type: String,
        default : ''
    },
    roles: {
        user: {
            type: Boolean,
            default: false
        },
        admin: {
            type: Boolean,
            default: false
        },
        employee: {
            type: Boolean,
            default: false
        },
        content: {
            type: Boolean,
            default: false
        },
    },
    social: {
        twitter: {
            type: String,
            default: ''
        },
        facebook: {
            type: String,
            default: ''
        },
        linkedin: {
            type: String,
            default: ''
        },
    },
    contacted: {
        type: Boolean,
        default: false
    }
},{ timestamps: true })

module.exports = mongoose.model('User', User);
