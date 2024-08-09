const express = require('express')
const Course = require('../models/courseSchema');
const  {handleUploadCourse , handleDeleteCourse , handleReadAllCourse , handleUpdateCourse  , handleReadCourse } = require('../Controllers/course')

const router = express.Router()

// http://localhost:3000/api/courses/update/course

// ############### Create Course Route ############
router.post('/upload/course', handleUploadCourse );


// ############### Update Course Route ############
router.post('/update/course' , handleUpdateCourse );

// ############### Read All Courses Route ############
router.get('/read/all', handleReadAllCourse)


// ############### Read Single Course Route ############

router.get('/read/:id', handleReadCourse)


// ############### Delete Course Route #########
router.post('/delete/:id',handleDeleteCourse);

module.exports =  router