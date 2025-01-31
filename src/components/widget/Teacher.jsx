import React from "react";
import { useSelector } from "react-redux";
const TeacherWidget = () => {
  const { loading, teacherData, error } = useSelector((state) => state.teacher);
 
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow">
      <p className="text-purple-500 font-bold text-lg">{teacherData?.teacherData?.length}</p>
      <p className="text-gray-500">Teachers</p>
    </div>
  );
};

export default TeacherWidget;
