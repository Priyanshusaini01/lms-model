const multer = require("multer");
const fs = require("fs");
const { v4: uuid4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const title = req.body.title;

    
    const uploadDir = `../courses/${title}`;
    const uploadDirThum = `../courses/${title}/thumbnail`;
    fs.mkdirSync(uploadDirThum, { recursive: true }); // create folder if it doesn't exist
    cb(null, uploadDirThum);
  },
  filename: function (req, file, cb) {
    const title = req.body.title;
    const fileExtension = path.extname(file.originalname);
    cb(null, `${title}${fileExtension}`);
  },
});

// filename: function (res, file, cb) {
//   cb(null, `${uuid4()}_${path.extname(file.originalname)}`);
// },
 

const fileFilter = (req,file , cb)=>{
    const allowedFileTypes = ["image/jpeg" , "image/jpg" , "image/png"]
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const uploadMiddleWare = multer({storage, fileFilter})

module.exports = uploadMiddleWare