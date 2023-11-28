const ErrorResponse = require('../utils/errorResponse');
const Domain = require('../models/Domains');
const mongoose = require('mongoose');

exports.AddDomain = async (req, res, next) => {
  try {

    let body = req.body;
      
    const domain = new Domain({
      ...body,
    })
  
  const addedDomain = await domain.save()
    
  if (!addedDomain) {
      return next(new ErrorResponse('add Domain failed', 400))
  }
  return res.status(200).json({
      success: true,
      data: addedDomain
  })

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.updateDomain = async (req, res, next) => {
  try {

    let body = req.body;
    const id = req.query.id
    
    const updatedDomain = await Domain.updateOne({ _id: mongoose.Types.ObjectId(id) }, body)
    if (updatedDomain.nModified !== 1) {
        return res.status(200).json({
            data: null,
            message: 'update failed',
            success: false
        })
    }

    return res.status(200).json({
        success: true,
        data: null,
        message: 'Domain Updated Successfully'
    })

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
}
exports.GetDomains = async (req, res, next) => {

  try {
    const allDomains = await Domain.find({})

    if (!allDomains) {
      return next(new ErrorResponse("Domains Getting Failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Get Domains",
      data: allDomains,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.GetDomainById = async (req, res, next) => {

  try {
    const singleDomain = await Domain.findById({ _id: mongoose.Types.ObjectId(req.query.id) });

    if (!singleDomain) {
      return next(new ErrorResponse("Domain Getting Failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Get Domain",
      data: singleDomain,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.deleteDomain = async (req, res, next) => {
  try {
    
    const deletedDomains = await Domain.deleteOne({ _id: mongoose.Types.ObjectId(req.query.id) })
    
    if (deletedDomains?.deletedCount === 1) {
        return res.status(200).json({
            success: true,
            message: "Deleted Successfully",
            data: null
        })
    }
    else {
        return res.status(400).json({
            success: false,
            data: null,
            message: 'deletion failed'
        })
    }

  }
  catch (err) {
      return next(new ErrorResponse(err, 400))
  }
}

