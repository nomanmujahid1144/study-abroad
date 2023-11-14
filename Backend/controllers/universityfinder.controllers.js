const ErrorResponse = require("../utils/errorResponse");
const UniversityFinder = require("../models/UniversityFinder");
const mongoose = require("mongoose");
const sgMail = require("@sendgrid/mail");
const { uploadFile, uploadImage } = require("../helpers/helpers");
sgMail.setApiKey(process.env.EMAIL_API);

exports.AddGetUniverisityFinder = async (req, res, next) => {
    try {
  
      console.log(req.body)

      let body = req.body.dataUniversityFinder;
      const userId = req.user.data[1];
      console.log(body);

      const universityFinder = new UniversityFinder({
        ...body,
        userId: userId
      });

      universityFinder.save();
  
      if (!universityFinder) {
        return next(new ErrorResponse("add University Finder failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Added University Finder. And if you want to check details click on Login Button",
        data: universityFinder,
      });
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  
exports.UpdateUniverisityFinder = async (req, res, next) => {
    try {
  
      let body = req.query.dataUniversityFinder;
      const id = req.query.id;
      console.log(body);
      console.log(req.files);

      if (body.workExperience.isExperience === 'None') {
        body.workExperience.isExperience = false;
        body.workExperience.yearsOfExperience = 0;
      } else {
        body.workExperience.isExperience = true;
      }

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


      const updatedFinder = await UniversityFinder.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) }, {
        ...body,
        document: document,
        image: req.files?.image ? FileUploaded.photoPath : '',
      },  
        { new: true }
      );
  
      if (!updatedFinder) {
        return next(new ErrorResponse("add University Finder failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Updated University Finder",
        data: updatedFinder,
      });
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  
exports.GetUniverisityFinders = async (req, res, next) => {
  
    try {
      const universityFinder = await UniversityFinder.find({})
  
      if (!universityFinder) {
        return next(new ErrorResponse("University Finder Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "University Finder Get Successfully",
        data: universityFinder,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.GetAllSinleUserUniverisityFinders = async (req, res, next) => {
  
    try {
      const userId = req.user.data[1];
      const universityFinder = await UniversityFinder.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!universityFinder) {
        return next(new ErrorResponse("University Finder Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "University Finder Get Successfully",
        data: universityFinder,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
exports.GetAllSinleUserUniverisityFindersById = async (req, res, next) => {
  
    try {
      const userId = req.query.id;
      const universityFinder = await UniversityFinder.find({userId: mongoose.Types.ObjectId(userId)})
  
      if (!universityFinder) {
        return next(new ErrorResponse("University Finder Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "University Finder Get Successfully",
        data: universityFinder,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  
exports.GetUniverisityFinder = async (req, res, next) => {
  
  try {
    const id = req.query.id;
    const universityFinder = await UniversityFinder.findOne({ _id: mongoose.Types.ObjectId(id) });
  
      if (!universityFinder) {
        return next(new ErrorResponse("University Finder Getting Failed", 400));
      }
      return res.status(200).json({
        success: true,
        message: "University Finder Get Successfully",
        data: universityFinder,
      });
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
  