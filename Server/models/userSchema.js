const { mongoose, Schema } = require("mongoose");
const Course = require("../models/courseSchema");

mongoose
  .connect("mongodb://127.0.0.1:27017/lmsSchema")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB ", err);
  });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  // userName: { type: String, required: true},
});

userSchema.post('findOneAndDelete', async (doc) => {
    if (doc) {
        await Course.deleteMany({ _id: { $in: doc.enrolledCourses } });
    }
});

module.exports = mongoose.model("User", userSchema);
