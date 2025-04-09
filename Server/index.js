const express =  require('express');
const user = require('./Routes/user');
const course = require('./Routes/course');
const app =  express();
const cors = require('cors');
const blogs = require('./Routes/blog');
const video = require('./Routes/video');
const cookieParser = require("cookie-parser");
const path = require('path');
const fs = require('fs');


app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173' , credentials:true}));
app.use('/courses', express.static(path.join(__dirname, '..', 'courses')));


// Middleware to handle CORS (Cross-Origin Resource Sharing)
var corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200,
    Credential:true,
}

const PORT = 3000;

app.get('/'  , (req, res)=>{
    res.send(`Welcome to the server!`)
})



// // Define a route to get the thumbnail image for a course --> http://localhost:3000/courses/TypeScript --> Testing Route
// app.get('/courses/:title', (req, res) => {
//     const title = req.params.title;
//     // Resolve the absolute path to the thumbnail image
//     const imagePath = path.join(__dirname, '..', 'courses', title, 'thumbnail', title+'.jpg');

//     res.sendFile(imagePath);
//   });


app.use('/api/users' , user);  // Using the user routes
app.use('/api/courses' , course); // Using the course routes
app.use('/api/blogs' , blogs); // Using the blog routes
app.use('/api/videoLecture' , video); // Using the video routes


// Video streamin and Testing 
app.get('/courses/:subdir/:filename', (req, res) => {
    const subdir = req.params.subdir;
    const filename = req.params.filename;
    const videoPath = path.join(__dirname, '..','lectures', subdir, filename);
    // path.join(__dirname, '..', 'courses', title, 'thumbnail', title+'.jpg');
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return;
        }

        const chunkSize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});



app.listen(PORT , (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
  

