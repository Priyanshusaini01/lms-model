import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Blog from "../../Components/All_Blog/Blog";
import { getAllBlogs } from "../../redux/slices/blogData";

const BlogPage = () => {
  // This is the section which will load all the data from the API to the redux Store
  /*---------------------------------------------------------------*/
  const dispatch = useDispatch(); //
  const blogs = useSelector((state) => state.blogs.blogs); //
  useEffect(() => {
    //
    dispatch(getAllBlogs()); //
  }, [dispatch]); //
  /*---------------------------------------------------------------*/

  // const getTokenFromCookie = () => Cookies.get('HashedCredentials');
  // console.log(getTokenFromCookie())
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white">
        <h1 className="text-4xl text-[#002f4D] font-bold mb-5">
          Latest <span className="text-[#f69342]">Blogs</span>
        </h1>
        <div className="blogContainer flex flex-row flex-wrap justify-center gap-2 items-start">
          {blogs.length === 0 ? (
            <h2 className="text-3xl">Please Login First....</h2>
          ) : (
            blogs.map((blog, index) => <Blog key={index} blog={blog} />)
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
