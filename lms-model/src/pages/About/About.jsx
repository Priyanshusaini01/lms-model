import React from "react";
import Gain from "../../Components/About_Gain/Gain";
import Choose from "../../Components/About_Choose/Choose";
import Industry from "../../Components/About_industry/Industry";
import AboutHm from "../../Components/abouthm/AboutHm";

const About = () => {
  return (
    <div className="inset-x-0 top-0">
      <div className="banner">
       <AboutHm/>
        <br></br>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-[#002f4d]">
          <span className="text-[#f47004]">About</span> Us
        </h2>
        <br></br>
        <hr class="w-full h-2  bg-gray-100 border-0 my-2 md:my-5 md:min-w-min dark:bg-[#002f4c]"></hr>
        <br></br>
      </div>

      <div className="oddid">
        <h2 className="text-5xl md:text-6xl font-bold mb-7 mt-4 text-center text-[#002f4d]">
          Welcome to ODD<span className="text-[#f47004]">I</span>Q
        </h2>
        <br></br>
        <p className="pl-7 pr-7 xl:pl-24 xl:pr-24 lg:pl-24 lg:pr-24 text-base lg:text-xl xl:text-xl font-normal lg:mx-10 xl:mx-32 text-justify mb-12">
          OODIQ is a training institute specializing in IT training, dedicated
          to equipping students with the skills and knowledge needed to excel in
          the rapidly evolving tech industry. The institute boasts a team of
          experienced instructors who bring real-world expertise and innovative
          teaching methods to the classroom, ensuring students gain a
          comprehensive understanding of the latest technologies and industry
          practices. ODDIQ offers a variety of courses, ranging from basic
          programming to advanced software development, tailored to meet the
          needs of both beginners and seasoned professionals. With a focus on
          hands-on learning and practical application, ODDIQ creates an engaging
          and supportive environment where students can thrive and achieve their
          career goals in the IT sector.
        </p>
      </div>
      <br />

      <Gain/>

      <Choose/>

      <hr class="w-full h-2  bg-gray-100 border-0 mt-2 md:my-0 md:min-w-min dark:bg-[#002f4c]"></hr>

      <Industry/>
    </div>
  );
};

export default About;
