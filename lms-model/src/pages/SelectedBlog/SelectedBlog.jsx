import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "../BlogPage/BlogPage";

const SelectedCard = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold the blog details
  const [loading, setLoading] = useState(true); // State to handle loading

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blogs/read/allowedBlogs")
      .then((response) => {
        // Handle the response data
        const filteredBlogs = response.data.filter(
          (a) => a._id !== (blog ? blog._id : "")
        );
        setBlogs(filteredBlogs);
        console.log(blogs); // Output the received data for debugging purposes
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, [blog]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/blogs/read/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  console.log(blog);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  

  return (
    <div className="bg-white flex justify-center text-black text-justify ">
      <div className=" w-[90vw] flex justify-center flex-col  ">
        <div
          className="image flex justify-center rounded-lg"
          style={{ border: "1px solid black" }}
        >
          <img src={blog.image} alt="" className=" h-[50vh] w-[90vw]  p-3 " />
        </div>

        <div className="content  flex justify-center items-center flex-col m-3">
          {/* Add more blog details as needed */}
          <div className="details flex lg:flex-row justify-center gap-5 md:flex-col ">
          <style>
          {`
            .image {
              border: 1px solid black;
            }

            .blog-content {
              width: 3/4;
            }

            @media (max-width: 640px) {
              .details {
                flex-direction: column;
              }
                
            }
          `}
        </style>
            <div className="blog-content w-full md:w-3/4 sm:w-full">
              <div className="title flex justify-start ">
                <h1 className="text-4xl underline">{blog.title}</h1> <h3>{}</h3>
              </div>
              <div className="details mt-3">
                <p>{blog.content}</p>
              </div>
            </div>
            <div className="restBlog w-full md:w-1/4 h-screen md:sticky overflow-y-scroll md:top-0 md:overflow-y-scroll">
              <div className="blogContainer flex flex-col items-center justify-center gap-2">
                <div className="rest m-2">
                  <h3>Rest Blogs</h3>
                </div>
                {blogs.map((blog, index) => (
                  <Blog key={index} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;