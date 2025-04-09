import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const Stud = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [autoplay, setAutoplay] = useState(true); // add autoplay state
  const slides = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/256/6997/6997662.png",
      alt: "Neha Tomar",
      paragraph: "ODDIQ is a good learning experience for developers and developers that want to learn."
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s",
      alt: "Pushpak",
       paragraph: "Developers that want to learn more about programming languages are encouraged to read the documentation."
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/146/146005.png",
      alt: "Simran",
      paragraph: "ODDIQ is a good learning experience for developers and developers that want to learn."
    },
    {
      id: 4,
      image: "https://cdn-icons-png.flaticon.com/512/1154/1154448.png",
      alt: "Esha",
      paragraph: "Having a good learning experience for developers to explore and learn programming."
    },
    {
      id: 5,
      image:
        "https://cdn.iconscout.com/icon/free/png-256/free-adolescent-icon-download-in-svg-png-gif-file-formats--boy-child-schoolboy-son-avatar-avatars-flat-circle-pack-people-icons-1129091.png?f=webp&w=256",
      alt: "Anubhav",
      paragraph: "Great people and environments make people awesome experience with knowledge and experience."
    },
  ];

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        handleNextClick();
      }, 2000); // change slide every 5 seconds
      return () => clearInterval(intervalId);
    }
  }, [autoplay, activeSlide]);

  const handlePrevClick = () => {
    setActiveSlide(activeSlide === 1 ? slides.length : activeSlide - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide === slides.length ? 1 : activeSlide + 1);
  };

  const handleAutoplayToggle = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-28">
      <div className="md:max-w-4xl mx-auto relative">
        <h2 className="text-5xl md:text-6xl font-bold mb-5 mt-10 md:mb-14 text-center text-[#002f4d]">
          What <span className="text-[#f47004]">Our </span>Student Says
        </h2>
        <br></br>
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`xl:p-16 p-10 font-bold text-5xl h-96 xl:mx-6 mx-8  bg-[url('https://img.freepik.com/premium-vector/cute-pink-abstract-minimal-background-perfect-wallpaper-backdrop-postcard-background_565280-460.jpg?w=1380')] bg-cover bg-no-repeat flex flex-col justify-normal items-center rounded-tl-3xl rounded-br-3xl text-white ${
              activeSlide === slide.id ? "" : "hidden"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-16 h-16 md:w-20 md:h-20 mix-blend-darken rounded-full"
            />
            {/* <span className="invisible w-12 text-center">{slide.id}</span> */}
            <span className="text-teal-300 text-xl md:text-2xl mt-2">
              {slide.alt}
            </span >
            <span className="px-2 flex align-middle justify-center items-center text-sm w-36 xl:w-80 lg:w-64 md:text-lg text-black mt-2">
              {slide.paragraph}
            </span>
            {/* <span className="invisible w-12 text-center">{slides.length}</span> */}

            {/* <p className="px-2 flex align-middle justify-center items-center text-sm  md:text-lg text-black mt-2">
              ODDIQ is a good learning <br></br>
              platform where you can learn <br></br>
              very easily with good teachers.
            </p> */}
            <div className="flex flex-row justify-normal items-center mt-2 gap-2">
              <span className="text-teal-300 text-2xl mt-2">
                {" "}
                <FaStar color="orange" />
              </span>
              <span className="text-teal-300 text-2xl mt-2">
                {" "}
                <FaStar color="orange" />
              </span>
              <span className="text-teal-300 text-2xl mt-2">
                {" "}
                <FaStar color="orange" />
              </span>
              <span className="text-teal-300 text-2xl mt-2">
                {" "}
                <FaStar color="orange" />
              </span>
            </div>
          </div>
        ))}

        <button onClick={handleAutoplayToggle}>
          {autoplay ? " " : "Play"}
        </button>

        {/* Prev/Next Arrows for desktop */}
        <div className="invisible md:visible  absolute inset-0 flex mx-7 ">
          <div className="invisible md:visible flex items-center justify-start w-1/2">
            <button
              className="bg-rose-300 text-[#002f4c]  hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-7"
              onClick={handlePrevClick}
            >
              {<FaArrowLeft size={40} />}
            </button>
          </div>
          <div className="invisible md:visible flex items-center justify-end w-1/2">
            <button
              className="bg-rose-300 text-[#002f4c] hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-7"
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
              className="bg-rose-300 text-[#002f4c]  hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-11 h-11 ml-1 md:-ml-7"
              onClick={handlePrevClick}
            >
              {<FaArrowLeft size={30} />}
            </button>
          </div>
          <div className="visible md:invisible flex items-center justify-end w-1/2">
            <button
              className="bg-rose-300 text-[#002f4c] hover:text-orange-500 font-bold hover:shadow rounded-full w-11 h-11 mr-1 md:-mr-7"
              onClick={handleNextClick}
            >
              {<FaArrowRight size={30} />}
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute w-full flex items-center justify-center px-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`flex-1 w-1 md:w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg ${
                activeSlide === slide.id ? "bg-orange-600" : "bg-[#002f4c]"
              }`}
              onClick={() => setActiveSlide(slide.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stud;
