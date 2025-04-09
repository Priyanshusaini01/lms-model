import React, {useState} from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Workspace = () => {

    const [activeSlide, setActiveSlide] = useState(1);
    const slides = [
      {
        id: 1,
        image: "https://cdn-icons-png.flaticon.com/256/6997/6997662.png",
        alt: "Neha Tomar",
        background:'https://media.istockphoto.com/id/1388937851/photo/modern-classroom-with-a-blank-white-board-and-laptops-on-desks.jpg?s=612x612&w=0&k=20&c=a0Ku8aI2dXTNIiAHNDXVqvjNbywx7GXPA-JqVxKzHI4='
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s",
        alt: "Pushpak",
        background:'https://www.shutterstock.com/image-photo/female-high-school-student-learning-600nw-2337904867.jpg'
      },
      {
        id: 3,
        image: "https://cdn-icons-png.flaticon.com/512/146/146005.png",
        alt: "Simran",
        background:'https://media.istockphoto.com/id/969860270/photo/classroom-without-children-at-the-end-of-school-named-often-schools-out.jpg?s=612x612&w=0&k=20&c=pGydA3YZTGXoSJv5OqqOWItEdWXDznkJzTpRztiVQbM='
      },
      {
        id: 4,
        image: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
        alt: "Esha",
        background:'https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-3d-render-of-empty-classroom-with-wooden-desks-and-chairs-image_3795903.jpg'
      },
      {
        id: 5,
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-adolescent-icon-download-in-svg-png-gif-file-formats--boy-child-schoolboy-son-avatar-avatars-flat-circle-pack-people-icons-1129091.png?f=webp&w=256",
        alt: "Anubhav",
        background:'https://media.istockphoto.com/id/1350580923/photo/modern-classroom-with-laptops.jpg?s=612x612&w=0&k=20&c=PlhL3Ir0hYPMrOfTSPEc5eLVM6r5fbajomtaI3bvFr8='
      },
    ];
  
    const handlePrevClick = () => {
      setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
    };
  
    const handleNextClick = () => {
      setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
    };

  return (
    <div className="flex justify-center items-center mb-28 mt-20 ">
        <div className=" relative">
          <h2 className="text-5xl md:text-6xl font-bold mb-5 md:mb-10 text-center text-[#002f4d]">
        <span className="text-[#f47004]">Our </span>Workspace
          </h2>
          <br></br>
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={` font-bold ml-3 md:ml-0 text-5xl h-64 w-[85vw] md:w-[60vw] md:h-[65vh] flex justify-normal items-center  bg-cover bg-no-repeat text-white rounded-lg 
            ${
                activeSlide === slide.id ? "" : "hidden"
              }`}
              style={{ backgroundImage: `url(${slide.background})`,}}
            >

              {/* <img
                src={slide.image}
                alt={slide.alt}
                className="w-16 h-16 md:w-20 md:h-20 mix-blend-darken rounded-full"
              />
         */}
            </div>
          ))}

          {/* Prev/Next Arrows for desktop */}
          <div className="invisible md:visible  absolute inset-0 flex mx-7 md:mx-0">
            <div className="invisible md:visible flex items-center justify-start w-1/2">
              <button
                className="bg-white text-[#002f4c]  hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
                onClick={handlePrevClick}
              >
                {<FaArrowLeft size={40} />}
              </button>
            </div>
            <div className="invisible md:visible flex items-center justify-end w-1/2">
              <button
                className="bg-white text-[#002f4c] hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
                onClick={handleNextClick}
              >
                {<FaArrowRight size={40} />}
              </button>
            </div>
          </div>

          {/* Prev/Next Arrows for mobile */}
          <div className="absolute inset-0 flex mx-3">
            <div className="visible md:invisible flex items-center justify-start w-1/2">
              <button
                className="bg-white text-[#002f4c]  hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-11 h-11 -ml-4 md:-ml-6"
                onClick={handlePrevClick}
              >
                {<FaArrowLeft size={30} />}
              </button>
            </div>
            <div className="visible md:invisible flex items-center justify-end w-1/2">
              <button
                className="bg-white text-[#002f4c] hover:text-orange-500 font-bold hover:shadow rounded-full w-11 h-11 -mr-4 md:-mr-6"
                onClick={handleNextClick}
              >
                {<FaArrowRight size={30} />}
              </button>
            </div>
          </div>


          {/* Buttons */}
          {/* <div className="absolute w-full flex items-center justify-center px-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`flex-1 w-1 md:w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg ${
                  activeSlide === slide.id ? "bg-orange-600" : "bg-[#002f4c]"
                }`}
                onClick={() => setActiveSlide(slide.id)}
              />
            ))}
          </div> */}

        </div>
      </div>
  );
};

export default Workspace;
