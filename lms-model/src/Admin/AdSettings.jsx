import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { MdLiveHelp } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Notify from './Notify';
import { TfiComments } from "react-icons/tfi";

const AdSettings = () => {
  return (
    <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="flex space-x-4">
            <Notify/>
           <TfiComments size={30}/>
          </div>
        </header>
        {/* <header className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl mb-3 font-bold">Settings</h2>
          </div>
          <div className="flex items-center space-x-4">
           <Notify/>
           <TfiComments size={30}/>
          </div>
        </header> */}
        <section className="bg-zinc-200 p-10 rounded-lg shadow-md ">  
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between items-center">
                <div className="flex flex-row justify-center items-center gap-3" >
                <IoNotifications size={23} className='mt-1' />
                <span>Home</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <RiLockPasswordFill size={20} />
                <span>Change Password</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <MdSecurity size={20} />
                <span>Security</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <FaUserGroup size={20} />
                <span>Friends</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <MdVerified size={20} />
                <span>Enable Two Step Verification</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <FaDisplay size={20} />
                <span>Display and languages</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <li className="flex justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-3" >
                <MdLiveHelp size={20} />
                <span>Help</span>
                </div>
              <IoIosArrowForward size={20} />
            </li>
          </ul>
        </section>
        <footer className="flex justify-center items-center text-xl gap-2 mt-8">
          <span>logout</span>
          <IoLogOutSharp size={30}/>
        </footer>
      </main>
  )
}

export default AdSettings
