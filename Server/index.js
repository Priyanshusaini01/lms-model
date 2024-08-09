const express =  require('express');
const user = require('./Routes/user');
const course = require('./Routes/course');
const app =  express();
const cors = require('cors');
const blogs = require('./Routes/blog');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173' , credentials:true}));


// Middleware to handle CORS (Cross-Origin Resource Sharing)
// var corsOptions = {
//     origin: 'http://localhost:5173/',
//     optionsSuccessStatus: 200,
//     Credential:true,
// }

const PORT = 3000;

app.get('/'  , (req, res)=>{
    res.send(`Welcome to the server!`)
})

app.post('/login' , (req, res)=>{
    res.cookie("heheh", "hahaha" , {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
        sameSite: "strict",
        path: '/', // Cookie is available for the entire domain
      }).send(`Login successful!`)
})



app.use('/api/users' , user);  // Using the user routes
app.use('/api/courses' , course); // Using the course routes
app.use('/api/blogs' , blogs); // Using the blog routes

app.listen(PORT , (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

