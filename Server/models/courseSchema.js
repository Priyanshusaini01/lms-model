const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title:String, 
  description: String,
  author: String,
  tags: [String],
  image: String,
  difficulty: String,
  price:  Number,
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Course", courseSchema);
