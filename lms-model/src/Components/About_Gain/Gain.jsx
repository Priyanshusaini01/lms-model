import React from "react";

const Gain = () => {
  return (
    <>
      <div className="imageContainer">
        <style>
          {`
            @media (max-width: 640px) {
              .cont-1 , .cont-2 {
                flex-direction: column;
              }     
            }
          `}
        </style>

        {/*for desktop*/}
        <div className="hidden xl:visible lg:visible cont-0 lg:flex xl:flex flex-row lg:flex-row md:flex-col sm:flex-col  items-center  lg:mx-24 xl:mx-32 justify-evenly">
          <div className="ima_Container">
            <img
              src="https://img.etimg.com/thumb/msid-90635673,width-300,height-225,imgsize-26928,resizemode-75/south-agencies.jpg"
              className="h-[25vh] lg:h-[40vh] xl:h-[40vh] shadow-xl border border-gray-300"
            ></img>
          </div>

          <div className="gain">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              What can you gain?
            </h2>
          </div>
        </div>

        {/*for mobile*/}
        <div className="visible xl:hidden lg:hidden cont-0 flex flex-row lg:flex-row md:flex-col sm:flex-col mx-4 items-center justify-evenly">
          <div className="gain">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              What can you gain?
            </h2>
          </div>

          <div className="ima_Container">
            <img
              src="https://img.etimg.com/thumb/msid-90635673,width-300,height-225,imgsize-26928,resizemode-75/south-agencies.jpg"
              className="h-[25vh] w-[75vw] lg:h-[40vh] xl:h-[40vh] shadow-xl border border-gray-300"
            ></img>
          </div>
        </div>

        {/*for desktop*/}
        <div className="hidden xl:visible lg:visible cont-1 lg:flex xl:flex flex-row items-center justify-evenly">
          <div className="ima_Container w-1/2 flex justify-end">
            <img
              src="https://thefederal.com/h-upload/2023/08/08/377740-collegestudentstoefl.webp"
              className="h-[40vh] xl:mt-1 shadow-xl border border-gray-300"
            ></img>
          </div>

          <div className="gain w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              <p className="pl-2 pr-2 xl:pl-20 xl:pr-24 lg:pl-10 lg:pr-32 text-base lg:text-xl xl:text-xl font-normal xl:mr-32 text-justify">
                Students who choose ODDIQ gain a wealth of knowledge and skills
                that prepare them for successful careers in the IT industry. The
                institute offers a comprehensive curriculum that covers all
                major programming languages and the latest technologies
                advancements, ensuring students stay ahead of industry trends.
                With experienced instructors who bring real-world expertise to
                their teaching, students receive practical, hands-on training
                that enhances their understanding and application of complex
                concepts.
              </p>
            </h2>
          </div>
        </div>

        {/*for mobile*/}
        <div className="visible xl:hidden lg:hidden flex flex-row items-center mx-4 mt-2 justify-evenly">
          <div className="ima_Container w-1/2 flex justify-end">
            <img
              src="https://thefederal.com/h-upload/2023/08/08/377740-collegestudentstoefl.webp"
              className="h-[25vh] w-[60vw] lg:h-[40vh] xl:h-[40vh] shadow-xl border border-gray-300"
            ></img>
          </div>

          <div className="gain w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              <p className="pl-2 pr-2 xl:pl-24 xl:pr-24 lg:pl-24 lg:pr-24 text-base lg:text-xl xl:text-xl mt-3 font-normal text-justify">
                Students who choose ODDIQ gain a wealth of knowledge and skills
                that prepare them for successful careers in the IT industry.
              </p>
            </h2>
          </div>
        </div>
        <div className=" visible xl:hidden lg:hidden gain  mx-4">
            <p className="pl-2 pr-2 xl:pl-24 xl:pr-24 lg:pl-24 lg:pr-24 text-base lg:text-xl xl:text-xl font-normal text-justify  text-[#002f4d]">
              The institute offers a comprehensive curriculum that covers all
              major programming languages and the latest technologies
              advancements, ensuring students stay ahead of industry trends.
              With experienced instructors who bring real-world expertise to
              their teaching, students receive practical, hands-on training that
              enhances their understanding and application of complex concepts.
            </p>
         
        </div>
      </div>
    </>
  );
};

export default Gain;
