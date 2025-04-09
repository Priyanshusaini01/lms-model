import React, { useState } from "react";

const MyCourses = () => {
  const [activeSemester, setActiveSemester] = useState("Semester 01");
  const [semesterIndex, setSemesterIndex] = useState(0);
  const [checkedModules, setCheckedModules] = useState({});

  const semesterData = {
    "Semester 01": [
      {
        module: "Module 01",
        title: "Programming",
        unit: "Unit 01",
        status: "Completed",
      },
      {
        module: "Module 02",
        title: "Networking",
        unit: "Unit 01",
        status: "Ongoing",
      },
      {
        module: "Module 03",
        title: "Database",
        unit: "Unit 01",
        status: "Pending",
      },
      {
        module: "Module 04",
        title: "Professional Practice",
        unit: "Unit 01",
        status: "Pending",
      },
    ],
    "Semester 02": [
      {
        module: "Module 05",
        title: "Advanced Programming",
        unit: "Unit 02",
        status: "Ongoing",
      },
      {
        module: "Module 06",
        title: "Network Security",
        unit: "Unit 02",
        status: "Pending",
      },
      {
        module: "Module 07",
        title: "Data Structures",
        unit: "Unit 02",
        status: "Completed",
      },
      {
        module: "Module 08",
        title: "Project Management",
        unit: "Unit 02",
        status: "Pending",
      },
    ],
    "Semester 03": [
      {
        module: "Module 09",
        title: "Web Development",
        unit: "Unit 03",
        status: "Ongoing",
      },
      {
        module: "Module 10",
        title: "Mobile Development",
        unit: "Unit 03",
        status: "Pending",
      },
      {
        module: "Module 11",
        title: "Cloud Computing",
        unit: "Unit 03",
        status: "Completed",
      },
      {
        module: "Module 12",
        title: "AI and ML",
        unit: "Unit 03",
        status: "Pending",
      },
    ],
    "Semester 04": [
      {
        module: "Module 13",
        title: "Big Data",
        unit: "Unit 04",
        status: "Ongoing",
      },
      {
        module: "Module 14",
        title: "Cyber Security",
        unit: "Unit 04",
        status: "Pending",
      },
      {
        module: "Module 15",
        title: "Blockchain",
        unit: "Unit 04",
        status: "Completed",
      },
      { module: "Module 16", title: "IoT", unit: "Unit 04", status: "Pending" },
    ],
  };

  const semesters = Object.keys(semesterData);

  const handlePrevious = () => {
    setSemesterIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + semesters.length) % semesters.length;
      setActiveSemester(semesters[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setSemesterIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % semesters.length;
      setActiveSemester(semesters[newIndex]);
      return newIndex;
    });
  };

  return (
    <div>
      <section className="mb-6">
        <div className="flex space-x-4">
          <div className="bg-teal-700 text-white p-4 rounded-lg flex items-center">
            <i className="fas fa-file-alt text-2xl mr-2"></i>
            <div>
              <p>Diploma in English</p>
              <p>OXF/ENG/01</p>
            </div>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-lg flex items-center">
            <i className="fas fa-file-alt text-2xl mr-2"></i>
            <div>
              <p>Diploma in IT</p>
              <p>OXF/DIT/01</p>
            </div>
          </div>
          <div className="bg-teal-700 text-white p-4 rounded-lg flex items-center">
            <i className="fas fa-file-alt text-2xl mr-2"></i>
            <div>
              <p>HND in Computing</p>
              <p>OXF/HND/01</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex space-x-4 mb-4">
          {Object.keys(semesterData).map((semester, index) => (
            <button
              key={semester}
              onClick={() => {
                setActiveSemester(semester);
                setSemesterIndex(index);
              }}
              className={`py-2 px-4 rounded ${
                activeSemester === semester
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {semester}
            </button>
          ))}
        </div>
        <div className="border border-blue-400 rounded-lg p-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Module</th>
                <th className="py-2">Title</th>
                <th className="py-2">Unit</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {semesterData[activeSemester].map((course, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <input
                      type="checkbox" className="mr-4"
                      checked={checkedModules[course.module] || false}
                      onChange={(e) => {
                        setCheckedModules((prevModules) => ({
                          ...prevModules,
                          [course.module]: e.target.checked,
                        }));
                      }}
                    />
                    {course.module}
                  </td>
                  <td className="py-2">{course.title}</td>
                  <td className="py-2">{course.unit}</td>
                  <td className="py-2">{course.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCourses;
