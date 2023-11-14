const ErrorResponse = require("../utils/errorResponse");
const Accmodation = require("../models/Accmodation");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const { uploadFile, uploadImage } = require("../helpers/helpers");
sgMail.setApiKey(process.env.EMAIL_API);

exports.AddAccomodation = async (req, res, next) => {
    try {
  
      let body = req.body.dataAccomodation;
      const userId = req.user.data[1];
      console.log(body);

      const accmodation = new Accmodation({
        ...body,
        userId: userId
      });

      accmodation.save();
  
      if (!accmodation) {
        return next(new ErrorResponse("Accmodation Finder failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Added Accmodation. And if you want to check details click on Login Button",
        data: accmodation,
      });
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.UpdateAccomodation = async (req, res, next) => {
  try {

    let body = req.query.dataAccomodation;
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
    
    const updatedAccomodation = await Accmodation.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      {
        ...body,
        document: document,
        image: req.files?.image ? FileUploaded.photoPath : '',
      }
      ,
      { new: true }
    );

    if (!updatedAccomodation) {
      return next(new ErrorResponse("Updated Accomodation failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Updated Accomodation Data",
      data: updatedAccomodation,
    });

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};

exports.GetAccomodations = async (req, res, next) => {
  
    try {
      const accmodations = await Accmodation.find({})
  
      if (!accmodations) {
        return next(new ErrorResponse("Accmodations Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Accmodations Get Successfully",
        data: accmodations,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
exports.GetAllSinleUserAccomodations = async (req, res, next) => {
  
  try {
      const userId = req.user.data[1];
      const accmodations = await Accmodation.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!accmodations) {
        return next(new ErrorResponse("Accmodations Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Accmodations Get Successfully",
        data: accmodations,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
exports.GetAllSinleUserAccomodationsById = async (req, res, next) => {
  
  try {
      const userId = req.query.id;
      const accmodations = await Accmodation.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!accmodations) {
        return next(new ErrorResponse("Accmodations Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Accmodations Get Successfully",
        data: accmodations,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  
exports.GetAccomodation = async (req, res, next) => {
  
  try {
    const id = req.query.id;
    console.log(id)
      const accmodation = await Accmodation.findOne({ _id: mongoose.Types.ObjectId(id) });
    
        if (!accmodation) {
          return next(new ErrorResponse("Accmodation Getting Failed", 400));
        }
        return res.status(200).json({
          success: true,
          message: "Accmodation Get Successfully",
          data: accmodation,
        });
      } catch (err) {
        return next(new ErrorResponse(err, 400));
      }
};