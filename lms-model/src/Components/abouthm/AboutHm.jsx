import React, { useEffect, useState } from "react";

const AboutHm = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      src: "https://images.squarespace-cdn.com/content/v1/5c86b8dde8ba44f7bfefa4e6/1601746366844-TK6LKL7M5AIAHH6IDAK4/shutterstock_719721619.jpg",
      alt: "Slide 1",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/008/935/218/non_2x/asian-business-people-meeting-corporate-communication-teamwork-concept-free-photo.JPG",
      alt: "Slide 2",
    },
    {
      src: "https://png.pngtree.com/background/20240122/original/pngtree-college-students-using-laptop-in-library-textbooks-male-higher-education-photo-picture-image_7383042.jpg",
      alt: "Slide 3",
    },
    {
      src: "https://www.dicsinnovatives.com/blog/wp-content/uploads/2024/06/top10lan.jpg",
      alt: "Slide 4",
    },
    {
      src: "https://wallpapers.com/images/hd/meeting-background-yfnpez33riesb0vr.jpg",
      alt: "Slide 5",
    },
  ]);

  const autoplayInterval = 3000; // autoplay interval in milliseconds (5000 = 5 seconds)

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
      <div className="relative h-56 overflow-hidden object-cover md:h-[85vh] bg-cover bg-no-repeat">
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

export default AboutHm;
