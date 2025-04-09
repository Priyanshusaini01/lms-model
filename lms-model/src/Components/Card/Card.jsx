import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ course }) => {


  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const fetchThumbnail = async (title) => {
      try {
        // Fetch the image URL
        const response = await axios.get(
          `http://localhost:3000/api/courses/course/${title}`,
          {
            responseType: "blob", // This ensures the response is treated as a Blob (binary data)
          }
        );

        // Create a URL for the blob
        const imageUrl = URL.createObjectURL(response.data);
        console.log("Image URL:", imageUrl);

        // Set the image URL to state
        setImagePath(imageUrl);
      } catch (error) {
        console.error("Error fetching thumbnail:", error);
        setImagePath(""); // Fallback if there's an error
      }
    };

    fetchThumbnail(course.title);
  }, [course.title]);

  console.log(imagePath)

  return (
    <Link to={`/courses/${course.title}`}>
      <div
        className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] 
      shadow-lg hover:shadow-gray-500 rounded-lg  p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72"
      >
        <img
          src={imagePath}
          alt={course.title}
          className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
        />
        <h3 className="text-xl font-bold text-[#002f4c] mt-4 ">
          {course.title}
        </h3>
        <div className="flex gap-2 justify-evenly py-8 ">
          <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
            <div className="flex  items-center gap-1">
              Enroll Now <FaArrowRight />
            </div>
          </button>
          <br />
          <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;


// {/* <div>
//       <div className="container mx-auto p-4 md:p-10 lg:p-8">
//         <div className="relative mt-4 flex justify-end justify-items-center mr-9 ml-8">
//           <input
//             type="text"
//             className="w-full md:w-96 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="What do you want to learn?"
//           />
//           <FaSearch className="absolute mt-3 mr-5 flex justify-center" />
//         </div>

//         <div className="bg-white rounded-lg shadow-md mt-flex justify-items-center justify-center py-9 8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
//             {/* Course Card 1 */}
//             <div className="bg-[url('https://media.istockphoto.com/id/465956764/vector/abstract-background.jpg?s=612x612&w=0&k=20&c=dfYenXINpm7GxduecSiG1sTWGLzeTo8GDymRjI2YNrk=')] shadow-lg hover:shadow-gray-500 rounded-lg p-4 text-center hover:bg-[#e6aab4] transition duration-300 ease-in-out w-72 h-72">
//               <img
//                 src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png"
//                 alt="React Native Mobile App Development"
//                 className="w-20 h-18 mx-auto rounded-lg mb-2 mt-9 hover:animate-spin"
//               />
//               <h3 className="text-lg font-bold text-[#002f4c] mt-4">
//                 React Native Development
//               </h3>
//               <div className="flex gap-2 justify-evenly py-8">
//                 <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
//                   <div className="flex items-center gap-1">
//                     Enroll Now <FaArrowRight />
//                   </div>
//                 </button>
//                 <br />
//                 <button className="bg-[#002f4c] hover:bg-[#86198f] text-white font-bold py-1 px-2 rounded-full mt-4">
//                   View Details
//                 </button>
//               </div>
//             </div>
     
//           </div>
//         </div>

//       </div>
//     </div> */}