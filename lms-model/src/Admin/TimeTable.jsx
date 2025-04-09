import React, { useState } from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

const lecturesData = [
    { name: 'John', email: 'john@gmail.com', subject: 'English', startTime: '9.00', endTime: '1.00', date: '20.10.2023' },
    { name: 'Doe', email: 'doe@gmail.com', subject: 'Programming', startTime: '9.00', endTime: '1.00', date: '21.10.2023' },
    { name: 'Sam', email: 'sam@gmail.com', subject: 'Database', startTime: '9.00', endTime: '1.00', date: '22.10.2023' },
    { name: 'Kumar', email: 'kumar@gmail.com', subject: 'Networking', startTime: '9.00', endTime: '1.00', date: '23.10.2023' },
    { name: 'Sanjay', email: 'sanjay@gmail.com', subject: 'Security', startTime: '9.00', endTime: '1.00', date: '24.10.2023' },
    { name: 'Alice', email: 'alice@gmail.com', subject: 'Math', startTime: '10.00', endTime: '2.00', date: '25.10.2023' },
    { name: 'Bob', email: 'bob@gmail.com', subject: 'Science', startTime: '11.00', endTime: '3.00', date: '26.10.2023' },
    { name: 'Charlie', email: 'charlie@gmail.com', subject: 'History', startTime: '12.00', endTime: '4.00', date: '27.10.2023' },
    { name: 'David', email: 'david@gmail.com', subject: 'Geography', startTime: '1.00', endTime: '5.00', date: '28.10.2023' },
    { name: 'Eve', email: 'eve@gmail.com', subject: 'Physics', startTime: '2.00', endTime: '6.00', date: '29.10.2023' },
  ];

const TimeTable = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const itemsPerPage = 5;
  
    const handleClickNext = () => {
      if (currentPage < Math.ceil(lecturesData.length / itemsPerPage)) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handleClickPrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleClickLiveClass = () => {
      setVideoSrc('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with your live class video URL
      setShowModal(true);
    };
  
    const handleClickRecordedClass = () => {
      setVideoSrc('https://www.w3schools.com/html/mov_bbb.mp4'); // Replace with your recorded class video URL
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setVideoSrc('');
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = lecturesData.slice(indexOfFirstItem, indexOfLastItem);
  

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Time Table</h1>
        <div className="flex space-x-4">
          <i className="fas fa-bell text-xl"></i>
          <i className="fas fa-comment-dots text-xl"></i>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
        <button onClick={handleClickLiveClass} className="bg-blue-900 text-white py-4 px-8 rounded-lg text-xl w-full sm:w-auto">Live Class</button>
        <button onClick={handleClickRecordedClass} className="bg-blue-900 text-white py-4 px-8 rounded-lg text-xl w-full sm:w-auto">Recorded Class</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="w-full bg-gray-100 text-left text-gray-600">
              <th className="py-4 px-6"><input type="checkbox" /></th>
              <th className="py-4 px-6">Lecture Name</th>
              <th className="py-4 px-6">Subject</th>
              <th className="py-4 px-6">Start Time</th>
              <th className="py-4 px-6">End Time</th>
              <th className="py-4 px-6">Date</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((lecture, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-4 px-6"><input type="checkbox" /></td>
                <td className="py-4 px-6 flex items-center">
                  <img src="https://placehold.co/40x40" alt={`Profile picture of ${lecture.name}`} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <div className="font-bold">{lecture.name}</div>
                    <div className="text-gray-500">{lecture.email}</div>
                  </div>
                </td>
                <td className="py-4 px-6">{lecture.subject}</td>
                <td className="py-4 px-6">{lecture.startTime}</td>
                <td className="py-4 px-6">{lecture.endTime}</td>
                <td className="py-4 px-6">{lecture.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handleClickPrevious} className="py-2 px-4 border border-gray-300 rounded-lg">Previous</button>
        <button onClick={handleClickNext} className="py-2 px-4 border border-gray-300 rounded-lg">Next</button>
      </div>

      {showModal && (
        <div className="fixed inset-60 bg-pink-800 w-[50vw] bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-600">
            <FaRegTimesCircle size={30} />
            </button>
            <video controls className="w-[40vw] h-auto">
              <source src={videoSrc } type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  )
}

export default TimeTable
