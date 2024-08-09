import React from "react";

const Student = () => {
  return (
    <>
      <section className="container mx-auto py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]">
            What <span className="text-[#f47004]">Our </span>Student Says
          </h2>
          <br></br>
          <div className="flex flex-row justify-evenly flex-wrap gap-3">
            {/* Course Card 1 */}
            <div className=" bg-[#fbf5f5] flex w-64 flex-col justify-start items-center h-72 rounded-tl-3xl rounded-br-3xl relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s"
                alt="MaleUser"
                className="w-24 h-24 mx-auto mb-2 mt-10 mix-blend-darken"
              />
              <h3 className="text-lg font-bold">Pushpak Kumar Soni</h3>
              <p className="">
                ODDIQ is a good learning platform where you can learn very
                easily with good teachers.
              </p>
            </div>
            {/* Course Card 2 */}
            <div className=" bg-[#fbf5f5] w-64 flex flex-col justify-start items-center h-72 rounded-tl-3xl rounded-br-3xl relative">
              <img
                src="https://cdn-icons-png.flaticon.com/256/6997/6997662.png"
                alt="FemaleUser"
                className="w-24 h-24 mx-auto mb-2 mt-10 mix-blend-darken"
              />
              <h3 className="text-lg font-bold">Neha Tomar</h3>
              <p>
                ODDIQ is a good learning platform where you can learn very
                easily with good teachers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
