import React from "react";
import {useSelector} from "react-redux"
const StudentWidget = () => {
  const {studentData} = useSelector((state)=>state.student)
  console.log(studentData?.studentList?.length)
  return (
    <div className="bg-orange-100 p-4 rounded-lg shadow">
      <p className="text-orange-500 font-bold text-lg">{studentData?.studentList?.length}</p>
      <p className="text-gray-500">Students</p>
    </div>
  );
};

export default StudentWidget;
