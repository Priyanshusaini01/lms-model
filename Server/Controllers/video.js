const mongoose = require("mongoose");
const VideoSchema = require("../models/video");

const uploadLectures = async (req, res) => {
  console.log(req.generatedFilename);
  try {
    const newVideo = await VideoSchema.create({
      title: req.generatedFilename,
      videoPath: req.file?.path,
      courseTitle:req.params.title
    });
    res.status(201).json({ message: "Lecture uploaded successfully", video: newVideo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading lecture" });
  }
};

const getAllVideo = async (req, res) => {
    const lectureName = req.params.courseTitle

    if (!lectureName) {
        return res.status(400).json({ message: "Please provide a valid course title" });
    }
    
    try {
        const lectures = await VideoSchema.find({courseTitle:lectureName})

        if (lectures){
            res.status(200).json(lectures);
        }else{
            res.status(404).json({ message: "No lectures found for this course" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching lectures" });
    }
}



module.exports = {uploadLectures , getAllVideo};
