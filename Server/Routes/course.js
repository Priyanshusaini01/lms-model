const express = require('express')
const Course = require('../models/courseSchema');
const MulterMiddleWare = require('../Middleware/MulterMiddleware');
const  {handleUploadCourse , handleDeleteCourse , handleReadAllCourse , handleUpdateCourse  , handleReadCourse } = require('../Controllers/course')
const path = require('path');
const user = require('../models/userSchema');

const router = express.Router()

// http://localhost:3000/api/courses/update/course

// ############### Create Course Route ############
router.post('/upload/course', MulterMiddleWare.single('image'), handleUploadCourse );


// ############### Update Course Route ############
router.post('/update/course' , handleUpdateCourse );

// ############### Read All Courses Route ############
router.get('/read/all', handleReadAllCourse)


// ############### Read Single Course Route ############

router.get('/read/:id', handleReadCourse)


// ############### Delete Course Route #########
router.post('/delete/:id',handleDeleteCourse);




// enrolled courses 

// router.get('/users/:userId/enrolled-courses', async (req, res) => {
//   try {
//     // Get the user ID from the params
//     const userId = req.params.userId;

//     // Find the user by ID
//     const f_user = await user.findById(userId);

//     // If the user is not found, return a 404 error
//     if (!f_user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Get the enrolled course IDs from the user document
//     const enrolledCourseIds = f_user.enrolledCourses;

//     console.log(`Enrolled course IDs: ${enrolledCourseIds}`);

//     // Log the Course.find() query to see what's being executed
//     const query = Course.find({ _id: { $in: enrolledCourseIds } });
//     console.log(`Course.find() query: ${query.toString()}`);

//     // Find the courses by IDs
//     const enrolledCourses = await query;

//     console.log(`Enrolled courses: ${enrolledCourses}`);

//     // Check if any courses were found
//     const courseCount = await Course.countDocuments({ _id: { $in: enrolledCourseIds } });
//     console.log(`Course count: ${courseCount}`);

//     if (courseCount === 0) {
//       console.log('No courses found that match the enrolled course IDs');
//     }

//     // Return the enrolled courses
//     res.json(enrolledCourses);
//   } catch (error) {
//     // Return a 500 error if there's an issue with the database query
//     res.status(500).json({ message: 'Error fetching enrolled courses' });
//   }
// });





router.get('/course/:title', (req, res) => {
    const title = req.params.title;
    // Resolve the absolute path to the thumbnail image
    const imagePath = path.join(__dirname, '..', '../courses', title, 'thumbnail', title+'.png');
    console.log(imagePath);
    res.sendFile(imagePath);
  });





module.exports =  router