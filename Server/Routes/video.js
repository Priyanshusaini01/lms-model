const express = require('express');
const {uploadLectures , getAllVideo} = require('../Controllers/video');
const MulterVideoMiddleware = require('../Middleware/MulterVideoMiddleware')

const router = express.Router()

router.post('/uploadAt/:title',MulterVideoMiddleware.single('lecture'), uploadLectures)

router.get('/getAllLectures/:courseTitle', getAllVideo)

// http://localhost:3000/api/videoLecture/uploadAt/:title


module.exports = router