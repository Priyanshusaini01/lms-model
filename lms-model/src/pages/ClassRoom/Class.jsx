import React, { useEffect } from "react";
import Card from "../../Components/Course_Card/Card";
import { useSelector } from "react-redux";

const Class = () => {
  const user = useSelector((state) => state.currentUser.User); //
  const userEnrolledCourse = user.enrolledCourses;
  const courses = useSelector((state) => state.courses.courses);
  const filteredCourses = courses.filter((course) =>
    userEnrolledCourse.includes(course._id)
  );

  console.log(filteredCourses);

  // console.log(userEnrolledCourse);
  return (
    <div className="flex flex-col flex-nowrap justify-between items-center">
      <h1 className="mb-4 mt-4 text-3xl font-semibold text-[#002f4c]">Hello <span className="text-orange-500">{user.name}</span> your Enrolled Courses</h1>
      <div className="enrolled flex flex-wrap flex-row justify-center items-center gap-4">
        {filteredCourses.map((courseId) => (
          <Card key={courseId._id}/>
        ))}
      </div>
    </div>
  );
};

export default Class;
