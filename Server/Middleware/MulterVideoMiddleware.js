const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { v4: uuid4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const title = req.params.title;
    const uploadDir = `../courses/${title}/lectures`;
    fs.mkdirSync(uploadDir, { recursive: true }); // create folder if it doesn't exist
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uploadDir = `../courses/${req.params.title}/lectures`;
    const title = req.params.title;
    fs.readdir(uploadDir, (err, files) => {
      if (err) {
        console.error(err);
      } else {
        const len = files.length + 1;
        const filename = `${title}-lecture${len}${path.extname(file.originalname)}`;
        cb(null, filename);
        req.generatedFilename = filename; // store the generated filename in the req object
      }
    });
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "video/mp4",
    "video/avi",
    "video/mov",
    "video/webm",
    "video/flv",
    "video/wmv",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadVideoMiddleware = multer({ storage, fileFilter });

module.exports = uploadVideoMiddleware;