import React, { useEffect, useState } from "react";

const CourseHm = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      src: "https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg",
      alt: "Slide 1",
    },
    {
      src: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/252171278/original/a601a854e6bc0bf076c99c2d0c0697c03941aa89/help-you-with-different-programming-languages.jpg",
      alt: "Slide 2",
    },
    {
      src: "https://www.makeblock.com/cdn/shop/articles/coding_vs_programming_1200x1200.jpg?v=1689329187",
      alt: "Slide 3",
    },
    {
      src: "https://di.ku.dk/Nyheder/2023/fremtidens-programmeringssprog-udvikles-i-danmark/programming_on_screen-1100x600.jpg",
      alt: "Slide 4",
    },
    {
      src: "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/65725709c91402ab52b1c2b9_Best%207%2B%20Coding%20Languages%20for%20a%20SaaS%20Tech%20Stack%202023%20Guide.webp",
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
      <div className="relative h-56 overflow-hidden  md:h-[90vh] bg-cover bg-no-repeat">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeSlide ? "active" : "hidden"
            }`}
            data-carousel-item={index === activeSlide ? "active" : ""}
          >
            <img
              src={slide.src}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={slide.alt}
            />

            
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
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
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-zinc-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-400/30 group-hover:bg-white/50 dark:group-hover:bg-zinc-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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

export default CourseHm;
