import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { title, image, linkedinId, author, content, timestamp } = blog;
  const formattedTimestamp = new Date(timestamp).toLocaleString();
  const excerpt = content.slice(0, 20) + "...";
  const cutTitle = title.slice(0, 10) + "...";
  console.log(cutTitle);
  const [clicked, setClicked] = useState(false);
  const [likes, setLikes] = useState(110); // Assuming likes start at 0, or you can initialize it with blog.likes if available

  const handleLike = () => {
    if (!clicked) {
      setClicked(true);
      setLikes(likes + 1);
    } else {
      setClicked(false);
      setLikes(likes - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-4 w-[20rem] mt-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 w-full">
            <img
              src={image}
              alt="Blog Post Image"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#002f4a]">{cutTitle}</h3>
            <p className="text-sm text-gray-500">{author}</p>
            <p className="text-sm text-gray-700">{formattedTimestamp}</p>
            <p>{excerpt}</p>
            <div className="flex justify-between items-center gap-3 mt-4">
              <button className="flex w-auto items-center gap-2 px-4 py-2 bg-[#002f4a] text-white rounded">
                <Link to={`/blogs/${blog._id}`}>
                  Read More <FaArrowRight />
                </Link>
              </button>
              <a
                href={`https://${linkedinId}`}
                target="_blank"
                className="flex items-center gap-2 text-[#002f4a]"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <button
                className="flex items-center gap-2 text-[#002f4a]"
                onClick={handleLike}
              >
                <PiHeartStraightDuotone
                  style={{ color: clicked ? "red" : "black" }}
                />{" "}
                {likes}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
