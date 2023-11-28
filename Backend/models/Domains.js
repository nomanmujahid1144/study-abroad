const mongoose = require('mongoose');
const Domain = new mongoose.Schema({
    websiteName: {
        type: String,
        default: ''
    },
    domain: {
        type: String,
        default: ''
    },
},
    { timestamps: true })

module.exports = mongoose.model('Domain', Domain);
