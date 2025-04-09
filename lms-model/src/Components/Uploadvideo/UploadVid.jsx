import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoUploadComponent = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(null);
  // const [courseTitle, setCourseTitle]= useState(null);

  const{title} = useParams()


  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file.type.includes("video")) {
      setVideoFile(file);
    } else {
      alert("Please select a video file");
    }
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert("Please select a video file to upload");
      return;
    }
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("lecture", videoFile);

    

    axios
      .post(`http://localhost:3000/api/videoLecture/uploadAt/${title}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setUploaded(true);
        setUploading(false);
      })
      .catch((error) => {
        setError(error.message);
        setUploading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-4">Upload Video Lecture</h2>
      <label className=" flex justify-center items-center">
        <input
          type="file"
          name="lecture"
          id="lecture" 
          onChange={handleVideoChange}
          className="hidden "
        />
        <img
          src="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg"
          alt="Upload Icon"
          width="70"
          className="cursor-pointer "
        />
      </label>
      {videoFile && (
        <p className="mt-2 text-gray-500">
          Selected video: {videoFile.name}
        </p>
      )}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-4 py-2 px-4 rounded-md text-white ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Upload Video"}
      </button>
      {uploaded && (
        <p className="mt-4 text-green-500 font-bold">
          Video uploaded successfully!
        </p>
      )}
      {error && <p className="mt-4 text-red-500 font-bold">{error}</p>}
    </div>
  );
};


export default VideoUploadComponent;