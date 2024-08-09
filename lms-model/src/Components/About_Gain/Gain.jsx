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
        <div className="cont-1 flex flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-evenly">
          <div className="ima_Container">
            <img
              src="https://img.etimg.com/thumb/msid-90635673,width-300,height-225,imgsize-26928,resizemode-75/south-agencies.jpg"
              className="h-[40vh]"
            ></img>
          </div>
          <div className="gain">
            <h2 className="text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              What can you gain?
            </h2>
          </div>
        </div>

        <div className="cont-2  flex flex-row   items-center justify-evenly">
          <div className="ima_Container w-1/2 flex justify-end">
            <img
              src="https://thefederal.com/h-upload/2023/08/08/377740-collegestudentstoefl.webp"
              className="h-[40vh]"
            ></img>
          </div>
          <div className="gain w-1/2">
            <h2 className="text-6xl font-bold mb-4 text-center flex justify-center items-center align-middle text-[#002f4d]">
              <p className="pl-16 pr-16 text-2xl font-semibold text-justify">
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
      </div>
    </>
  );
};

export default Gain;
