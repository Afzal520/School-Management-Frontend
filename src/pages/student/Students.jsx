import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateStudent from "../studentDashboard/CreateStudent";
import { useState } from "react";
import StudentList from "../studentDashboard/StudentList";

const Students = () => {
  const [studentForm, setstudentForm] = useState(false);
  const navigate = useNavigate()
  const toggleCreateStudent = () => {
   navigate("/students/create")
  };
  return (
    <div>
      <div className="flex justify-between p-3" onClick={toggleCreateStudent}>
        <div className="">
          <h1 className="font-extrabold">
            {studentForm ? "Student management system" : "Students List"}
          </h1>
        </div>
        <div className="">
          <button className="border-2 rounded px-2">
            {studentForm ? "Back" : "AddStudent"}
          </button>
        </div>
      </div>
      { <StudentList />}
    </div>
  );
};

export default Students;
