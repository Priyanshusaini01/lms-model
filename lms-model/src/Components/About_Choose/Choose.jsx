import React from "react";

const Choose = () => {
  return (
    <>
      <style>
        {`
            @media (max-width: 640px) {
              .cont-2  {
                flex-direction: column-reverse;
              }     
            }
          `}
      </style>
      {/* for desktop*/}
      <div className="Choose cont-2 hidden xl:visible lg:visible cont-1 lg:flex xl:flex flex-row lg:flex-row md:flex-col sm:flex-col mx-4 justify-center items-center lg:mt-10 xl:mt-28 mb-20 lg:mb-28 xl:mb-32  lg:mx-24 xl:mx-32  relative">
        <div className="text-container">
          <h2 className="lg:text-5xl xl:text-6xl font-bold text-left lg:ml-16 xl:ml-32 mt-3 lg:mb-9 text-[#f9852a]">
            Why to choose us?
          </h2>
          
          <div className="Choose hidden xl:visible lg:visible cont-1 lg:flex xl:flex flex-row lg:flex-row md:flex-col sm:flex-col justify-center items-center relative">
          <div className="gain w-1/2">
              <p className="pl-2 pr-2 xl:pl-28 xl:pr-10 lg:pl-16 lg:pr-6 text-base lg:text-xl xl:text-xl font-normal text-justify  text-[#002f4d]">
              Choosing ODDIQ for your IT training ensures a comprehensive and
              industry-relevant education that sets you apart in the competitive
              tech landscape. At ODDIQ, you'll benefit from the expertise of
              seasoned instructors who bring real-world experience and
              innovative teaching methods to the classroom, providing you with a
              deep understanding of current technologies and practices.
              </p>
           
          </div>
          <div className="image-container w-1/2 flex justify-center">
              <img
                src="https://t4.ftcdn.net/jpg/02/97/26/79/360_F_297267951_j4riVSaWgIj3kVVfBwkacXTBfako9Gkj.jpg"
                className=" xl:h-[40vh] xl:w-[20vw] lg:h-[50vh] lg:w-[30vw] rounded-full  shadow-xl border border-gray-300 hover:animate-vflip"
              ></img>
            </div>

        </div>
        </div>
      </div> 

      
 
    {/*for mobile*/}
      <div className="Choose visible xl:hidden lg:hidden flex flex-row lg:flex-row md:flex-col sm:flex-col justify-center mb-20 lg:mb-28 xl:mb-32  items-center mt-10 relative">
        <div className="text-container">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#f9852a]">
            Why to choose us?
          </h2>
          <br></br>
          <div className="cont flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center items-center mx-4">
          <div className="image-container w-1/2 flex justify-center items-center">
              <img
                src="https://t4.ftcdn.net/jpg/02/97/26/79/360_F_297267951_j4riVSaWgIj3kVVfBwkacXTBfako9Gkj.jpg"
                className="rounded-full  h-48 w-48 shadow-xl border border-gray-300"
              ></img>
            </div>
          <br></br>
            <p className=" pl-2 pr-2 xl:pl-24 xl:pr-24 lg:pl-24 lg:pr-24 text-base lg:text-xl xl:text-xl mx-3 font-normal text-justify">
              Choosing ODDIQ for your IT training ensures a comprehensive and
              industry-relevant education that sets you apart in the competitive
              tech landscape. At ODDIQ, you'll benefit from the expertise of
              seasoned instructors who bring real-world experience and
              innovative teaching methods to the classroom, providing you with a
              deep understanding of current technologies and practices.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Choose;
