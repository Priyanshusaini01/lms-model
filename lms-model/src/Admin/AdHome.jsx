import React from 'react'
import { IoMenu } from "react-icons/io5";
import { TfiComments } from "react-icons/tfi";
import Notify from './Notify';

const AdHome = () => {
  return (
    <div className="flex-1 p-9">
        <header className="flex justify-between items-center mb-6">
          <div>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoMenu />
            </button>
            <h2 className="text-2xl mb-3 font-bold">Dashboard</h2>
            <p>Welcome Back, Sana</p>
          </div>
          <div className="flex items-center space-x-4">
           <Notify/>
           <TfiComments size={30}/>
          </div>
        </header>
        <section className="mb-6">
          <div className="bg-white p-4 rounded shadow">
            <img src="https://placehold.co/600x200" alt="Oxford scholarships for PhD (Dphil) in Biology, 2023-24, University of Oxford, UK" className="w-full rounded" />
            <p className="text-center mt-4">Oxford scholarships for PhD (Dphil) in Biology, 2023-24, University of Oxford, UK</p>
            <p className="text-center text-green-600">Application deadline: 20 January 2023</p>
          </div>
        </section>
        <section className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-teal-600 text-white p-4 rounded shadow">
            <i className="fas fa-file-alt text-2xl mb-2" />
            <p>Diploma in English</p>
            <p>OXF/ENG/01</p>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded shadow">
            <i className="fas fa-file-alt text-2xl mb-2" />
            <p>Diploma in IT</p>
            <p>OXF/DIT/01</p>
          </div>
          <div className="bg-teal-800 text-white p-4 rounded shadow">
            <i className="fas fa-file-alt text-2xl mb-2" />
            <p>HND in Computing</p>
            <p>OXF/HND/01</p>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900 text-white p-4 rounded shadow">
            <p>Module Progress : 90%</p>
          </div>
          <div className="bg-blue-900 text-white p-4 rounded shadow">
            <p>Assignment Progress : 10%</p>
          </div>
          <div className="bg-blue-900 text-white p-4 rounded shadow">
            <p>Attendance Progress : 97%</p>
          </div>
          <div className="bg-blue-900 text-white p-4 rounded shadow">
            <p>Course Progress : 50%</p>
          </div>
        </section>
      </div>
  )
}

export default AdHome
