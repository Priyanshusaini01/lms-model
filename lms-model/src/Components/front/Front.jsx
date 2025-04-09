import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Front = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      src: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Slide 1",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/005/263/703/original/e-learning-concept-laptop-and-education-icon-on-green-background-with-copy-space-online-study-with-computer-from-home-free-vector.jpg",
      alt: "Slide 2",
    },
    {
      src: "https://images6.alphacoders.com/133/thumb-1920-1333846.png",
      alt: "Slide 3",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/029/104/662/non_2x/a-man-relaxing-on-a-sofa-detailed-online-learning-illustration-pro-download-vector.jpg",
      alt: "Slide 4",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/003/473/970/non_2x/asian-woman-working-on-his-laptop-computer-and-a-happy-smile-free-photo.JPG",
      alt: "Slide 5",
    },
  ]);

  const autoplayInterval = 5000; // autoplay interval in milliseconds (5000 = 5 seconds)

  useEffect(() => {
    const carousel = document.getElementById("indicators-carousel");
    const carouselInner = carousel.children[0];
    const slides = carouselInner.children;
    const indicators = carousel.children[1].children;
    const prevButton = carousel.children[2];
    const nextButton = carousel.children[3];

    const handlePrevClick = () => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === 0) {
          return slides.length - 1;
        }
        return prevActiveSlide - 1;
      });
    };

    const handleNextClick = () => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === slides.length - 1) {
          return 0;
        }
        return prevActiveSlide + 1;
      });
    };

    const handleIndicatorClick = (index) => {
      setActiveSlide(index);
    };

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);
    Array.from(indicators).forEach((indicator, index) => {
      indicator.addEventListener("click", () => handleIndicatorClick(index));
    });

    return () => {
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
      Array.from(indicators).forEach((indicator, index) => {
        indicator.removeEventListener("click", () =>
          handleIndicatorClick(index)
        );
      });
    };
  }, []);

  useEffect(() => {
    const carouselInner = document.getElementById("indicators-carousel")
      .children[0];
    const slides = carouselInner.children;

    Array.from(slides).forEach((slide, index) => {
      if (index === activeSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }, [activeSlide]);

  useEffect(() => {
    let autoplayId = setInterval(() => {
      setActiveSlide((prevActiveSlide) => {
        if (prevActiveSlide === slides.length - 1) {
          return 0;
        }
        return prevActiveSlide + 1;
      });
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayId);
    };
  }, [slides]);

  return (
    <div id="indicators-carousel" className="relative" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative inset-0 h-56 overflow-hidden  object-cover md:h-[83vh] bg-cover bg-no-repeat">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-500 ease-in-out ${
              index === activeSlide ? "active" : "hidden"
            }`}
            data-carousel-item={index === activeSlide ? "active" : ""}
          >
            <img
              src={slide.src}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
            />
            <span className="flex xl:ml-32 lg:ml-32 ml-4 mt-9 justify-items-end xl:mt-64 lg:-mt-3">
              <button className="absolute border border-[#fbf5f5] bg-[#e1bda8] hover:bg-[#b7d3e4] text-[#002f4c] text-xs lg:text-xl xl:text-2xl font-bold py-2 md:py-2 md:px-6 px-3 rounded-lg mt-28 md:mt-96">
                <div className="flex  items-center md:gap-3 gap-2">
                  Explore More <FaArrowRight size={20} />
                </div>
              </button>
            </span>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2  bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>

      {/* Slider controls */}

      {/* Previous button */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Front;
