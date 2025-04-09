import React, {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { TfiComments } from "react-icons/tfi";
import Notify from './Notify';
import AdHome from './AdHome';
import AdSettings from './AdSettings';
import MyCourses from './MyCourses';
import Assignment from './Assignment';
import TimeTable from './TimeTable';
import Chat from './Chat';

const Dasboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [selectedPage, setSelectedPage] = useState('home');

    const renderContent = () => {
      switch (selectedPage) {
        case 'home':
          return (
            <AdHome/>);
        case 'myCourses':
          return <MyCourses/>;
        case 'assignments':
          return <Assignment/>;
        case 'timeTable':
          return <TimeTable/>;
        case 'forum':
          return <Chat/>;
        case 'settings':
          return <AdSettings/>;
        default:
          return null;
      }
    };


  return (
    <div className="flex justify-center justify-items-center ">
      <div className="flex border border-gray-200  shadow-xl min-h-screen ">
      <div className="flex w-[60vw] h-screen border-gray-200  shadow-xl ">
      
      <aside
        className={`bg-zinc-300 p-4 ${isOpen ? 'w-64' : 'w-24'} transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-6">
          <img src="https://oddiq.com/wp-content/uploads/2022/07/WhatsApp_Image_2024-03-07_at_11.11.08_PM-removebg-preview.png" alt="Oxford Logo" className={`h-9 w-24 ${isOpen ? 'block' : 'hidden'}`} />
          <IoMenu size={40}  className='ml-3' onClick={() => setIsOpen(!isOpen)}/>
        </div>

        <div className="flex items-center mb-6">
          <img src="https://media.licdn.com/dms/image/v2/D5635AQE05ByBo6U8wA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1712128538996?e=1726977600&v=beta&t=8S1guWgFXNExkUaDLsjqrT7D_Jo_-_me4x1NQNDEOT0" alt="User Avatar" className="h-16 w-16 rounded-full" />
          {isOpen && (
            <div className="ml-4 text-black font-semibold">
              <div>Hi, Sana</div>
              <div className="text-sm">Admin</div>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <button 
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('home')}
          >
            <IoHome size={30} />
            {isOpen && <span className="ml-4">Home</span>}
          </button>
          <button
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('myCourses')}
          >
             <GrNotes size={30}/>
            {isOpen && <span className="ml-4">My Courses</span>}
          </button>
          <button
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('assignments')}
          >
            <FaTasks size={30}/>
            {isOpen && <span className="ml-4">Assignments</span>}
          </button>
          <button
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('timeTable')}
          >
            <FaCalendarAlt size={30}/>
            {isOpen && <span className="ml-4">Time Table</span>}
          </button>
          <button
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('forum')}
          >
             <FaComments size={30}/>
            {isOpen && <span className="ml-4">Forum</span>}
          </button>
          <button
            className="flex items-center w-full bg-blue-300 text-blue-900 py-2 px-4 rounded-lg"
            onClick={() => setSelectedPage('settings')}
          >
             <IoSettings size={30}/>
            {isOpen && <span className="ml-4">Settings</span>}
          </button>
        </div>
      </aside>

      {/* <main className="flex-1 p-9">
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
      </main> */}

      <main className="flex-1 p-6">
        {renderContent()}
      </main>
    </div>
    </div>
    </div>
  )
}

export default Dasboard