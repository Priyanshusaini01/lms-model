import React from 'react'

const Courses = () => {
    return (
        <>
            <section className="container mx-auto py-16">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]"><span className='text-[#f47004]'>Courses</span> We offer</h2>
                    <br></br>
                    <div className="flex flex-row justify-evenly flex-wrap gap-3">
                        {/* Course Card 1 */}
                        <div className=" bg-[#fbf5f5] flex w-64 flex-col justify-center items-center h-72 rounded-tl-3xl rounded-br-3xl relative">
                            <h3 className="text-lg font-bold absolute top-8 text-[#2f546c]">
                                Mobile App Development
                            </h3>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfxZxtlstaPSdf5MVjuifuP_7J6znHWzPkQ&s"
                                alt="Mobile App Development"
                                className="w-24 h-24 mx-auto  mb-2 mt-10 mix-blend-darken"
                            />
                            <button className="bg-[#f9852a] text-[#1f3948] font-bold py-2 px-4 rounded-full mt-4">
                                View Details
                            </button>
                        </div>
                        {/* Course Card 2 */}
                        <div className="bg-[#fbf5f5] w-64 flex flex-col justify-center items-center h-72 rounded-tl-3xl rounded-br-3xl relative">
                            <h3 className="text-lg font-bold absolute top-8 text-[#2f546c]">
                                Web Development
                            </h3>
                            <img
                                src="https://t4.ftcdn.net/jpg/02/29/98/75/360_F_229987557_fdL6JQyBAAWYFDzXLsWfFmwoyN0n7W2c.jpg"
                                alt="Web Development"
                                className="w-24 h-24 mx-auto  mb-2 mt-10 mix-blend-darken"
                            />
                            <button className="bg-[#f9852a] text-[#1f3948] font-bold py-2 px-4 rounded-full mt-4">
                                View Details
                            </button>
                        </div>
                        {/* Course Card 3 */}
                        <div className="bg-[#fbf5f5] w-64 flex flex-col justify-center items-center h-72 rounded-tl-3xl rounded-br-3xl relative">

                            <h3 className="text-lg font-bold absolute top-8 text-[#2f546c]">
                                Core Java
                            </h3>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfAqyu6oP_tGANZShDpYiJfoefpzK0FGRMQ&s"
                                alt="Core Java"
                                className="w-24 h-24 mx-auto  mb-2 mt-10 mix-blend-darken"
                            />
                            <button className="bg-[#f9852a] text-[#1f3948] font-bold py-2 px-4 rounded-full mt-4">
                                View Details
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <button className="bg-[#002f4d] text-white font-bold py-2 px-4 rounded-full mt-20 relative left-1/2">See More...</button>
                </div>
            </section>
        </>
    )
}

export default Courses