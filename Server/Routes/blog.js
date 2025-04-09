const express = require('express')
const {handleUploadBlog , handleReadAllBlogs , handleBlogItem , handleReadAllowedBlogs , handlePermission , handleDeleteBlog, handleLiked , handle_dis_Liked} = require('../Controllers/blog');
const { jwtAuthMiddleware } = require('../Authentication/Auth');
const router = express.Router()


// http://localhost:3000/api/blogs/create/blog
// ########### Create Blog Route ###########
router.post('/create/blog' , handleUploadBlog)

// ########### Get All Blogs Route ###########
router.get('/read/allBlogs' , handleReadAllBlogs)

router.get('/read/allowedBlogs', handleReadAllowedBlogs)

// ########### Get One Blog Route ###########
router.get('/read/:_id' , handleBlogItem)

// ########### Permit Blog Route ###########
router.post('/allow/blog/:_id' , handlePermission)

// ########## Delete Blog Route #########
router.delete('/delete/:_id' , handleDeleteBlog)


// ######### Handle Likes #################
router.post('/liked', handleLiked) 

router.post('/dis_liked', handle_dis_Liked) 


module.exports = router