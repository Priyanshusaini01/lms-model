const mongoose = require('mongoose')
const Course = require('../models/courseSchema')


// http://localhost:3000/api/courses/upload/course

//########### Create Route ###########
const handleUploadCourse = async (req , res)=>{
    const {title , description , author , tags, difficulty , date , isPublished , price} = req.body
    const image = req.file

    console.log(req.body)

    const newCourse = await Course.create({
        title,
        description,
        author,
        tags,
        image:image?.path,
        difficulty,
        date,
        isPublished,
        price
    }).then(()=>{
        return res.status(201).json({message: 'Course uploaded successfully'})
    }).catch((error) => {
        console.error("Something went wrong in Uploading Course", error);
        res.status(500).json({ message: "Internal server error in Uploading Course" });
      })

    // res.send("Uploading Course")
}

// ############## Read Routes ############

// Read Individual Course
const handleReadCourse = async (req , res)=>{
    const course = await Course.findById(req.params.id).then(course =>{
        if(!course) return res.status(404).json({message: 'Course not found'})
        return res.json(course)
    }).catch((err)=>{
        console.error("Something went wrong in Reading Course", err);
        res.status(500).json({ message: "Internal server error in Reading Course" });
    })
}

// Read All Course
const handleReadAllCourse = async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err) {
      console.error("Something went wrong in Reading Courses", err);
      res.status(500).json({ message: "Internal server error in Reading Courses" });
    }
  }



// ############ Update Route ############
const handleUpdateCourse = async (req , res)=>{
    const {title , description , author , tags , image , difficulty , date , isPublished , price , _id} = req.body

    const updatedCourse = await Course.findByIdAndUpdate(
        _id,
        {
            title,
            description,
            author,
            tags,
            image,
            difficulty,
            date,
            isPublished,
            price
        }).then(()=>{
            return res.status(200).json({message: 'Course updated successfully'})
        }).catch((err)=>{
            console.error("Something went wrong in Updating Course", err);
            res.status(500).json({ message: "Internal server error in Updating Course" });
        })
}


// ############# Delete Route #############
const handleDeleteCourse = async (req , res)=>{
    await Course.findByIdAndDelete(req.params.id).then((course)=>{
        if(!course) return res.status(404).json({message: 'Course not found'})
        return res.json({message: 'Course deleted successfully'})
    }).catch((err)=>{
        console.error("Something went wrong in Deleting Course", err);
        res.status(500).json({ message: "Internal server error in Deleting Course" })
    })
}




module.exports = {handleUploadCourse , handleDeleteCourse , handleReadAllCourse , handleUpdateCourse  , handleReadCourse }
