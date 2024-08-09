import React from 'react'

const Facilities = () => {
    return (
        <>
            <div className="facilites bg-[#fee5e8] p-5">
                <div className="">
                    <h2 className="text-6xl font-bold mb-4 text-center text-[#002f4d]"><span className='text-[#f47004]'>Our </span>Facilities</h2>
                </div>
                <div className='facilites-box flex flex-row justify-around'>
                    <div className="facilites-item flex flex-col justify-center items-center">
                        <img src="https://static-00.iconduck.com/assets.00/graduation-cap-icon-512x335-2rjjt0b3.png" className='h-40'></img>
                        <p>DEMO CLASSES</p>
                    </div>
                    <div className="facilites-item flex flex-col justify-center items-center">
                        <img src="https://static-00.iconduck.com/assets.00/graduation-cap-icon-512x335-2rjjt0b3.png" className='h-40'></img>
                        <p>JOB ORIENTED COURSES</p>
                    </div>
                    <div className="facilites-item flex flex-col justify-center items-center">
                        <img src="https://static-00.iconduck.com/assets.00/graduation-cap-icon-512x335-2rjjt0b3.png" className='h-40'></img>
                        <p>TECHNICAL SUPPORT</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Facilities