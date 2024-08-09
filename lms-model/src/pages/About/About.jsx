import React from "react";
import Gain from "../../Components/About_Gain/Gain";
import Choose from "../../Components/About_Choose/Choose";
import Industry from "../../Components/About_industry/Industry";

const About = () => {
  return (
    <div className="">
      <div className="banner">
        <img
          src="https://previews.123rf.com/images/antoniodiaz/antoniodiaz1506/antoniodiaz150600015/41597583-portrait-of-a-group-of-people-looking-at-a-laptop-computer-and-doing-some-work-in-an-office.jpg"
          className="w-full"
          style={{ height: "85vh" }}
        ></img>
        <br></br>
        <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]">
          <span className="text-[#f47004]">About</span> Us
        </h2>
        <br></br>
        <hr className="border-[#002f4d] border-t-4"></hr>
        <br></br>
      </div>

      <div className="oddid">
        <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]">
          Welcome to ODD<span className="text-[#f47004]">I</span>Q
        </h2>
        <br></br>
        <p className="pl-16 pr-16 text-2xl font-semibold text-justify">
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

      <Industry/>
    </div>
  );
};

export default About;
