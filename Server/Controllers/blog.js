const Blog = require('../models/blogSchema')
const mongoose = require('mongoose')


const handleUploadBlog = async (req, res) => {
    const {title , content , image , author , linkedinId } = req.body
    
    const newBlog = await Blog.create({
        title,
        content,
        image,
        author,
        linkedinId,
    }).then(()=>{
        res.status(201).json({message: 'Blog created successfully'})
    }).catch(err => {
        res.status(400)
        console.log("Error creating blog")
    })
}

const handleReadAllBlogs = async (req, res) => {
    await Blog.find()
       .then(blogs => res.status(200).json(blogs))
       .catch(err => {
            res.status(400)
            console.log("Error reading blogs")
        })
}

const handleReadAllowedBlogs = async (req, res) => {    
    await Blog.find({status:true})
       .then(blogs => res.status(200).json(blogs))
       .catch(err => {
            res.status(400)
            console.log("Error reading blogs")
        })
}


const handleBlogItem = async (req, res) => {
    const { _id } = req.params
    
    await Blog.findById(_id)
       .then(blog => {
            if(!blog) return res.status(404).json({message: 'Blog not found'})
            res.status(200).json(blog)
        })
       .catch(err => {
            res.status(400)
            console.log("Error retrieving blog item")
        })
}

const handlePermission = async (req, res) => {
    const { _id } = req.params
    
    const blog = await Blog.findByIdAndUpdate(_id,{status: true}).then(blog => {
        if(!blog) return res.status(404).json({message: 'Blog not found'})
        res.status(200).json({message: 'Blog updated'})
    }).catch((err)=>{
        res.status(400)
        console.log("Error updating blog status")
    })
}

const handleDeleteBlog = async (req, res) => {
    const {_id} = req.params

    try{
        const user = await Blog.findByIdAndDelete(_id)
        if(!user) return res.status(404).json({message: 'Blog not found'})
        res.status(200).json({message: 'Blog Deleted Sucessfully' })
    }catch{
        res.status(500).json({message: 'Server Error'})
    }
}

const handleLiked = async (req, res) => {
    const { _id, user_id } = req.body;
  
    try {
      const blog = await Blog.findByIdAndUpdate(_id, { $inc: { likes: 1 } }, { new: true })
        .then(blog => {
          if (!blog) return res.status(404).json({ message: 'Blog not found' });
  
          blog.liked_user.push(user_id);
          blog.save();
  
          res.status(200).json({ message: 'Blog liked' });
        })
        .catch((err) => {
          res.status(400);
          console.log("Error liking blog:", err);
        });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  const handle_dis_Liked = async (req, res) => {
    const { _id, user_id } = req.body;

    try {
      const blog = await Blog.findByIdAndUpdate(_id, { $inc: { likes: -1 } })
        .then(blog => {
          if (!blog) return res.status(404).json({ message: 'Blog not found' });
          blog.liked_user.pop(user_id);
          blog.save();
          res.status(200).json({ message: 'Blog disliked' });
        })
        .catch((err) => {
          res.status(400);
          console.log("Error disliking blog:", err);
        });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  }

module.exports = {handleUploadBlog , handleReadAllBlogs , handleBlogItem , handleReadAllowedBlogs , handlePermission , handleDeleteBlog , handleLiked , handle_dis_Liked}