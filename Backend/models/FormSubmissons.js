const mongoose = require('mongoose');
const formSubmissionSchema = new mongoose.Schema({
    fullName:{
        type:String,
        default:''
    },
    phoneNumber:{
        type:String,
        default:''
    },
    formType:{
        type:String,
        default:''
    },
    contacted: {
        type: Boolean,
        defalut: false
    }
},{ timestamps: true })

module.exports = mongoose.model('FormSubmission', formSubmissionSchema);
