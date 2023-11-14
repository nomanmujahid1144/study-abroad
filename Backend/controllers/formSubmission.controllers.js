const ErrorResponse = require("../utils/errorResponse");
const FormsSubmission = require("../models/FormSubmissons");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const { uploadFile, uploadImage } = require("../helpers/helpers");
sgMail.setApiKey(process.env.EMAIL_API);

exports.AddFormSubmission = async (req, res, next) => {
    try {
      let body = req.body;

      const accmodation = new FormsSubmission({
          ...body,
          contacted: false
      });

      accmodation.save();
  
      if (!accmodation) {
        return next(new ErrorResponse("Form Submission failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Submitted Form.",
        data: accmodation,
      });
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.UpdateFormSubmissionToContacted = async (req, res, next) => {
    console.log(req.body, "signup social user request");
    try {
      const oldUser = await FormsSubmission.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(req.body.id) },{contacted : true})
      
      if (!oldUser) {
        // this means result is null
        return next(new ErrorResponse("Status is not updated", 401));
      } else { 
        return res.status(200).json({
          success: true,
          message: "Status Updated Successfully",
          data: oldUser,
        });
      }
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.GetAllContactedFormsSubmissions = async (req, res, next) => {
    try {
      const accmodations = await FormsSubmission.find({contacted: true})
  
      if (!accmodations) {
        return next(new ErrorResponse("Forms Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Forms Get Successfully",
        data: accmodations,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
exports.GetAllUnContactedFormsSubmissions = async (req, res, next) => {
    try {
      const accmodations = await FormsSubmission.find({contacted: false})
  
      if (!accmodations) {
        return next(new ErrorResponse("Forms Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Forms Get Successfully",
        data: accmodations,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};