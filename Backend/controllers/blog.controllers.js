const ErrorResponse = require('../utils/errorResponse');
const Blog = require('../models/Blog');
const mongoose = require('mongoose');
const { uploadImage } = require('../helpers/helpers');

exports.AddBlog = async (req, res, next) => {
  try {

    let body = req.body;
    console.log(body)
    const metaTags = JSON.parse(body.metaTags);
    const userId = req.user.data[1];
    if (!req.files) {
      return res.status(200).json({
          success: false,
          data: null,
          message: 'Upload Image'
      })
  }
    const uploadedPath = await uploadImage(req.files.blogImage, next)
    
    body.blogImage = uploadedPath.photoPath
    
    const product = new Blog({
      ...body,
      metaTags: metaTags,
      userId: userId
    })
  
  const addedProduct = await product.save()
    
  if (!addedProduct) {
      return next(new ErrorResponse('add blog failed', 400))
  }
  return res.status(200).json({
      success: true,
      data: addedProduct
  })

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.updateBlog = async (req, res, next) => {
  try {

    let body = req.body;
    console.log(body)
    body.metaTags = JSON.parse(body.metaTags);
    const id = req.query.id

    console.log(req.files)

    if (req.files) {
      if (req.files.blogImage) {
        const uploadedPath = await uploadImage(req.files.blogImage, next);
        body.blogImage = uploadedPath.photoPath
      }
    }
    
    
    
    const updatedBlog = await Blog.updateOne({ _id: mongoose.Types.ObjectId(id) }, body)
    if (updatedBlog.nModified !== 1) {
        return res.status(200).json({
            data: null,
            message: 'update failed',
            success: false
        })
    }

    return res.status(200).json({
        success: true,
        data: null,
        message: 'Blog Updated Successfully'
    })

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
}
exports.GetBlog = async (req, res, next) => {

  try {
    const allblogs = await Blog.find({})

    if (!allblogs) {
      return next(new ErrorResponse("Blogs Getting Failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Get Blogs",
      data: allblogs,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.GetAllBlogsWithDomains = async (req, res, next) => {

  try {
    console.log('rer')
    const allBlogs = await Blog.find({})
      .populate('domainId') // Populate the domain details
  
    if (!allBlogs) {
      return next(new ErrorResponse("Blogs Getting Failed", 400));
    }
  
    // Now, transform the result into the desired format
    const resultArray = allBlogs.map(blog => ({
      domainName: blog.domainId.websiteName, // Assuming 'websiteName' is the property in your 'Domain' model
      domain: blog.domainId.domain, // Assuming 'websiteName' is the property in your 'Domain' model
      domainId: blog.domainId._id, // Assuming 'websiteName' is the property in your 'Domain' model
      blogs: [blog]
    }));
  
    // Merge blogs with the same domain into a single object
    const finalResult = resultArray.reduce((acc, current) => {
      const existingDomain = acc.find(item => item.domainName === current.domainName);
      if (existingDomain) {
        existingDomain.blogs = existingDomain.blogs.concat(current.blogs);
      } else {
        acc.push(current);
      }
      return acc;
    }, []);
  
    return res.status(200).json({
      success: true,
      message: "Successfully Get Blogs",
      data: finalResult,
    });
  
  } catch (err) {
    console.log(err)
    return next(new ErrorResponse(err, 400));
  }
  
};
exports.GetDomainBlogs = async (req, res, next) => {
  try {

    const singleblog = await Blog.find({domainId : mongoose.Types.ObjectId(req.query.domainId)}, {_id: 0, userId: 0, lastUpdated: 0, domainId: 0, __v : 0})

    console.log(singleblog)

    if (!singleblog) {
      // return next(new ErrorResponse("Blogs Getting Failed", 400));
      return res.status(404).json({
        success: false,
        message: "Blog not found",
        data: null,
      });
    }
    if (singleblog.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Successfully Get Blog",
        data: {
          Note: `Please add this ${process.env.LIVE_SERVER_URL} baseURL before blogImage so that you can get the exect image.`,
          blogs: singleblog
        },
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "There is no Blog yet on this domain",
        data: [],
      });
    }
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.GetBlogById = async (req, res, next) => {

  try {
    console.log(req.query, 'req.query')
    const singleblog = await Blog.findById({ _id: mongoose.Types.ObjectId(req.query.id) }).populate('userId').populate('domainId');

    if (!singleblog) {
      return next(new ErrorResponse("Blogs Getting Failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Get Blog",
      data: singleblog,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.GetBlogByURL = async (req, res, next) => {

  try {
    const singleblog = await Blog.findOne({url : req.query.url }).populate('userId');

    if (!singleblog) {
      return next(new ErrorResponse("Blogs Getting Failed", 400));
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Get Blog",
      data: singleblog,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.AddBlogImage = async (req, res, next) => {
  try {
    console.log(req.files, 'Files Image')

    if (!req.files) {
      return res.status(200).json({
          success: false,
          data: null,
          message: 'Upload Image'
      })
  }
  const uploadedPath = await uploadImage(req.files.image, next)
    console.log(process.env.LIVE_SERVER_URL + uploadedPath , 'path')

    const path = process.env.LIVE_SERVER_URL + uploadedPath?.photoPath;
  return res.status(200).json({
      success: true,
      url: path,
      message : 'Successfully Uploaded Image'
  })

  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.deleteBlog = async (req, res, next) => {
  try {
    
    const deletedProducts = await Blog.deleteOne({ _id: mongoose.Types.ObjectId(req.query.id) })
    
    if (deletedProducts?.deletedCount === 1) {
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

