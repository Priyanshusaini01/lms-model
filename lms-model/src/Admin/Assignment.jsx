import React, { useState } from 'react'

const Assignment = () => {

  const [semester, setSemester] = useState(1);
  const [checkedAssignments, setCheckedAssignments] = useState({});

  const assignments = {
    1: [
      { unit: 3, subject: 'CRP', issueDate: '03/02/2023', deadline: '03/05/2023', status: 'Submitted' },
      { unit: 1, subject: 'Programming', issueDate: '03/09/2023', deadline: '03/09/2025', status: 'Pending' },
      { unit: 1, subject: 'Database', issueDate: '03/02/2024', deadline: '03/10/2026', status: 'Pending' },
      { unit: 1, subject: 'Networking', issueDate: '02/05/2022', deadline: '03/11/2023', status: 'Pending' },
      { unit: 2, subject: 'Security', issueDate: '02/08/2022', deadline: '03/10/2023', status: 'Late Submission' },
    ],
    2: [
      { unit: 4, subject: 'Math', issueDate: '01/02/2023', deadline: '01/05/2023', status: 'Submitted' },
      { unit: 2, subject: 'Physics', issueDate: '01/09/2023', deadline: '01/09/2025', status: 'Pending' },
      { unit: 3, subject: 'Chemistry', issueDate: '01/02/2024', deadline: '01/10/2026', status: 'Pending' },
      { unit: 1, subject: 'Biology', issueDate: '01/05/2022', deadline: '01/11/2023', status: 'Pending' },
      { unit: 5, subject: 'History', issueDate: '01/08/2022', deadline: '01/10/2023', status: 'Late Submission' },
    ],
    3: [
      { unit: 6, subject: 'Geography', issueDate: '02/02/2023', deadline: '02/05/2023', status: 'Submitted' },
      { unit: 7, subject: 'Economics', issueDate: '02/09/2023', deadline: '02/09/2025', status: 'Pending' },
      { unit: 8, subject: 'Political Science', issueDate: '02/02/2024', deadline: '02/10/2026', status: 'Pending' },
      { unit: 9, subject: 'Sociology', issueDate: '02/05/2022', deadline: '02/11/2023', status: 'Pending' },
      { unit: 10, subject: 'Psychology', issueDate: '02/08/2022', deadline: '02/10/2023', status: 'Late Submission' },
    ],
    4: [
      { unit: 11, subject: 'Philosophy', issueDate: '04/02/2023', deadline: '04/05/2023', status: 'Submitted' },
      { unit: 12, subject: 'Anthropology', issueDate: '04/09/2023', deadline: '04/09/2025', status: 'Pending' },
      { unit: 13, subject: 'Linguistics', issueDate: '04/02/2024', deadline: '04/10/2026', status: 'Pending' },
      { unit: 14, subject: 'Literature', issueDate: '04/05/2022', deadline: '04/11/2023', status: 'Pending' },
      { unit: 15, subject: 'Art', issueDate: '04/08/2022', deadline: '04/10/2023', status: 'Late Submission' },
    ],
  };

const handleCheckboxChange = (unit) => {
  if (checkedAssignments[unit]) {
    delete checkedAssignments[unit];
  } else {
    checkedAssignments[unit] = true;
  }
  setCheckedAssignments({...checkedAssignments});
}

const nextSemester = () => {
  setSemester((prevSemester) => {
    if (prevSemester < 4) {
      return prevSemester + 1
    } else {
      return 1
    }
  })
}


  return (
    
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-900">Assignment</h1>
        <div className="flex space-x-4">
          <i className="fas fa-bell text-xl"></i>
          <i className="fas fa-comment-dots text-xl"></i>
        </div>
      </header>
      <nav className="flex space-x-4 mb-8">
        <button
          onClick={() => setSemester(1)}
          className={`px-4 py-2 rounded-full ${semester === 1 ? 'bg-yellow-500 text-white' : 'bg-blue-900 text-white'}`}
        >
          Semester 01
        </button>
        <button
          onClick={() => setSemester(2)}
          className={`px-4 py-2 rounded-full ${semester === 2 ? 'bg-yellow-500 text-white' : 'bg-blue-900 text-white'}`}
        >
          Semester 02
        </button>
        <button
          onClick={() => setSemester(3)}
          className={`px-4 py-2 rounded-full ${semester === 3 ? 'bg-yellow-500 text-white' : 'bg-blue-900 text-white'}`}
        >
          Semester 03
        </button>
        <button
          onClick={() => setSemester(4)}
          className={`px-4 py-2 rounded-full ${semester === 4 ? 'bg-yellow-500 text-white' : 'bg-blue-900 text-white'}`}
        >
          Semester 04
        </button>
      </nav>
      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2"></th>
              <th className="py-2">Unit</th>
              <th className="py-2">Subject</th>
              <th className="py-2">Issues Date</th>
              <th className="py-2">Deadline</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments[semester].map((assignment, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">
                  <input 
                    type="checkbox" 
                    checked={checkedAssignments[assignment.unit]} 
                    onChange={() => handleCheckboxChange(assignment.unit)}
                  />
                </td>
                <td className="py-2 flex items-center">
                  {assignment.status === 'Submitted' && <i className="fas fa-check -circle text-green-500 mr-2"></i>}
                  {assignment.status === 'Pending' && <i className="far fa-circle text-gray-500 mr-2"></i>}
                  {assignment.status === 'Late Submission' && <i className="fas fa-times-circle text-red-500 mr-2"></i>}
                  {assignment.unit < 10 ? `0${assignment.unit}` : assignment.unit}
                </td>
                <td className="py-2">{assignment.subject}</td>
                <td className="py-2">{assignment.issueDate}</td>
                <td className="py-2">{assignment.deadline}</td>
                <td className="py-2">{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <button onClick={nextSemester} className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  )
}

export default Assignment
