const express = require('express')
const {handleUploadBlog , handleReadAllBlogs , handleBlogItem , handleReadAllowedBlogs , handlePermission , handleDeleteBlog} = require('../Controllers/blog');
const { jwtAuthMiddleware } = require('../Authentication/Auth');
const router = express.Router()


// http://localhost:3000/api/blogs/create/blog
// ########### Create Blog Route ###########
router.post('/create/blog' , handleUploadBlog)

// ########### Get All Blogs Route ###########
router.get('/read/allBlogs' , handleReadAllBlogs)

router.get('/read/allowedBlogs',jwtAuthMiddleware , handleReadAllowedBlogs)

// ########### Get One Blog Route ###########
router.get('/read/:_id' , handleBlogItem)

// ########### Permit Blog Route ###########
router.post('/allow/blog/:_id' , handlePermission)

// ########## Delete Blog Route #########
router.delete('/delete/:_id' , handleDeleteBlog)

module.exports = router