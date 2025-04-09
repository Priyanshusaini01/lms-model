import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UploadVid from "../../Components/Uploadvideo/UploadVid"
import { useEffect } from "react";

const Video = () => {
  // const videosArr = [
  //   'https://www.youtube.com/embed/9DLDCMNw2yw',
  //   'https://www.youtube.com/embed/XFZ-rQ8eeR8',
  //   'https://www.youtube.com/embed/pTOsiigFovU'
  // ];

  const [videosArr, setVideosArr] = useState([]);
  const { title } = useParams();
  const [currVideo, setCurrVideo] = useState(
    `http://localhost:3000/courses/${title}/lectures/${title}-lecture1.mp4`
  );

  useEffect(() => {
    if (currVideo.current) {
      currVideo.current.setAttribute("controlsList", "nodownload");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/videoLecture/getAllLectures/${title}`)
      .then((response) => {
        const lectures = response.data;
        console.log(lectures);
        setVideosArr(lectures);
        // do something with the lectures data
      })
      .catch((error) => {
        console.error(error);
      });
  }, [videosArr]);

  // const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  const setVideoSrc = (index) => {
    // setVideoSrc(videosArr[index]);
    setCurrVideo(
      `http://localhost:3000/courses/${title}/lectures/${title}-lecture${
        index + 1
      }.mp4`
    );
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full">
        <div
          className="relative w-full"
          style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
        >
          {videosArr.length === 0 ? (
            <p className="text-center">No videos found.</p>
          ) : (
            <iframe
              src={currVideo}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              title="video"
            ></iframe>
          )}
        </div>

        <div className="flex flex-col items-start p-8 w-full overflow-y-auto">
          <h2 className="text-2xl font-bold">Sample Video 1</h2>
          <p className="mt-2">
            This is a sample video for testing and demo. This is called
            description.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center md:w-1/2 p-8 space-y-8 overflow-y-auto">
        {videosArr.map((item, index) => (
          <button
            key={item._id} // Add unique key
            className="bg-transparent w-full hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            onClick={() => setVideoSrc(index)}
          >
            Lecture {index + 1}
          </button>
        ))}
        <UploadVid />
      </div>
    </div>
  );
};

export default Video;