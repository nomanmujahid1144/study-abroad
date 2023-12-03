const express = require('express');
const router = express.Router();
const {
    AddBlog,
    GetBlog,
    GetAllBlogsWithDomains,
    GetDomainBlogsWithDomainId,
    GetDomainBlogsWithDomainName,
    // GetSingleAdminBlogs,
    GetBlogById,
    GetBlogByURL,
    AddBlogImage,
    deleteBlog,
    updateBlog
} = require('../controllers/blog.controllers')
const checkAuth = require("../middleware/check-auth");

router.post('/addblog',checkAuth,  AddBlog)
router.get('/getblogs', GetBlog)
router.get('/getAllDomainsWithBlogs', GetAllBlogsWithDomains)
router.get('/get-domain-blogs', GetDomainBlogsWithDomainId)
router.get('/get-domain-blogs-with-domain-name', GetDomainBlogsWithDomainName)
// router.get('/getalladminblogs',checkAuth, GetSingleAdminBlogs)
router.get('/getblogbyid', GetBlogById);
router.get('/getblogbyurl', GetBlogByURL)
router.post('/addblogimg', AddBlogImage)
router.delete('/deleteblog', deleteBlog)
router.post('/updateblog', updateBlog)


module.exports = router;