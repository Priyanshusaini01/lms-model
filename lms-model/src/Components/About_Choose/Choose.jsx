import React from "react";

const Choose = () => {
  return (
    <>
      <style>
        {`
            @media (max-width: 640px) {
              .cont {
                flex-direction: column-reverse;
              }     
            }
          `}
      </style>
      <div className="Choose flex flex-row lg:flex-row md:flex-col sm:flex-col justify-center items-center relative">
        <div className="text-container">
          <h2 className="text-6xl font-bold mb-4 text-center text-[#f9852a]">
            Why to choose us?
          </h2>
          <br></br>
          <div className="cont flex flex-row lg:flex-row md:flex-col sm:flex-col justify-center items-center">
            <p className=" text-2xl font-semibold w-full p-6 ml-3 text-justify">
              Choosing ODDIQ for your IT training ensures a comprehensive and
              industry-relevant education that sets you apart in the competitive
              tech landscape. At ODDIQ, you'll benefit from the expertise of
              seasoned instructors who bring real-world experience and
              innovative teaching methods to the classroom, providing you with a
              deep understanding of current technologies and practices.
            </p>
            <br></br>
            <div className="image-container w-1/2 flex justify-center items-center">
              <img
                src="https://static2.bigstockphoto.com/0/0/4/large2/400058381.jpg"
                className="rounded-full h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
