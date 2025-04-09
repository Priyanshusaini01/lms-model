import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Blog from "../../Components/All_Blog/Blog";
import { getAllBlogs } from "../../redux/slices/blogData";
import { IoIosArrowDown } from "react-icons/io";

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

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Phone:", number);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white inset-x-0 top-0">

        <video className=" inset-0 w-full h-[70vh] object-cover" autoPlay muted loop>
          <source src="https://media.istockphoto.com/id/1301371350/video/core-ignition.mp4?s=mp4-640x640-is&k=20&c=zgkPdgJcSd_bMbqFcGlOg403-QZ5ZFzkWPk-oLc6UAk=" type="video/mp4" />
        </video>

        <h1 className="text-4xl text-[#002f4D] font-bold mb-5 mt-3">
          Latest <span className="text-[#f69342]">Blogs</span>
        </h1>
        <div className="blogContainer flex flex-row flex-wrap justify-center xl:gap-20 items-start mb-10">
          {blogs.length === 0 ? (
            <h2 className="text-3xl">Please Login First....</h2>
          ) : (
            blogs.map((blog, index) => <Blog key={index} blog={blog} />)
          )}
        </div>

        <hr class="w-full h-2  bg-gray-100 border-0 mt-2 md:my-0 md:min-w-min dark:bg-[#002f4c]"></hr>

        {/*Contact us form*/}

        <div className=" mx-auto p-4 mb-9 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 ">

      <div className="flex items-center">
      <video className=" inset-0 xl:w-[32vw] xl:h-[52vh] w-[75vw] h-[52vh] lg:w-[36vw] lg:h-[60vh]   mx-auto object-cover rounded-full border border-gray-100 shadow-2xl hover:animate-bounce" autoPlay muted loop>
          <source src="https://cdn.pixabay.com/video/2023/01/09/145864-787701151_large.mp4" type="video/mp4" />
        </video>
      </div>

        <div className="bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk2MC1uaW5nLTAxLWcteF8xLWt6ZWc4MndpLmpwZw.jpg')] bg-cover bg-no-repeat hover:shadow-2xl shadow-md mx-auto p-8 w-[80vw] lg:w-[40vw] xl:w-[30vw] mt-7 mb-9">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/*Language*/}
            <div class="inline-block relative w-52 mt-6 mb-6">
              <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Default Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
                <option>Japanese</option>
                <option>Russian</option>
                <option>Portuguese</option>
                <option>Italian</option>
                <option>Arabic</option>
                <option>Vietnamese</option>
                <option>Turkish</option>
                <option>Polish</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <IoIosArrowDown />
              </div>
            </div>

            {/*fields*/}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="url"
              placeholder="Url (LinkedIn)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded-md px-4 xl:py-3 lg:py-2 py-2 xl:h-40 lg:h-24 resize-none focus:outline-none focus:ring focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-[#002f4c] hover:bg-[#f46f06] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 mt-10"
            >
              Contribute Blogs
            </button>
          </form>
        </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default BlogPage;
