const ErrorResponse = require("../utils/errorResponse");
const Scholarship = require("../models/Scholarship");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const { uploadFile, uploadImage } = require("../helpers/helpers");
sgMail.setApiKey(process.env.EMAIL_API);

exports.AddScholarship = async (req, res, next) => {
    try {
  
      let body = req.body.dataScholarship;
      const userId = req.user.data[1];
      console.log(body);

      const scholarship = new Scholarship({
        ...body,
        userId: userId
      });

      scholarship.save();
  
      if (!scholarship) {
        return next(new ErrorResponse("Scholarship Finder failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Added Scholarship. And if you want to check details click on Login Button",
        data: scholarship,
      });
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  
exports.UpdateScholarship = async (req, res, next) => {
  try {

    let body = req.query.dataScholarship;
    const id = req.query.id;
    console.log(body);

    let FileUploaded;
    let document = {};
    if (req.files) {
      if (req.files?.document) { 
          FileUploaded = await uploadFile(req.files?.document, next)
          console.log(FileUploaded)
          document = {
              path: FileUploaded.photoPath,
              name: req.files.document.name,
              size: req.files.document.size
          }
      } else {
          FileUploaded = await uploadImage(req.files?.image, next)
      }
    }

    const updatedScholarship = await Scholarship.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      {
        ...body,
        document: document,
        image: req.files?.image ? FileUploaded.photoPath : '',
      }
      ,
      { new: true }
    );

    if (!updatedScholarship) {
      return next(new ErrorResponse("Update Scholarship failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Updated Scholarship Data",
      data: updatedScholarship,
    });

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.GetScholarships = async (req, res, next) => {
  
    try {
      const scholarships = await Scholarship.find({})
  
      if (!scholarships) {
        return next(new ErrorResponse("Scholarship Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Scholarships Get Successfully",
        data: scholarships,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
exports.GetAllSinleUserScholarships = async (req, res, next) => {
  
    try {
      const userId = req.user.data[1];
      const scholarships = await Scholarship.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!scholarships) {
        return next(new ErrorResponse("Scholarship Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Scholarships Get Successfully",
        data: scholarships,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.GetAllSinleUserScholarshipsById = async (req, res, next) => {
  
    try {
      const userId = req.query.id;
      const scholarships = await Scholarship.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!scholarships) {
        return next(new ErrorResponse("Scholarship Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Scholarships Get Successfully",
        data: scholarships,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.GetScholarship = async (req, res, next) => {
  
  try {
    const id = req.query.id;
    const scholarship = await Scholarship.findOne({ _id: mongoose.Types.ObjectId(id) });
  
      if (!scholarship) {
        return next(new ErrorResponse("Scholarship Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Scholarship Get Successfully",
        data: scholarship,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};