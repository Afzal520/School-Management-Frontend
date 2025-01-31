import React from "react";
import { Link } from "react-router-dom";
import CreateStudent from "../../components/student/CreateStudent";
import { useState } from "react";
import StudentList from "../../components/student/StudentList";

const Students = () => {
  const [studentForm, setstudentForm] = useState(false);
  const toggleCreate = () => {
    setstudentForm(!studentForm);
  };
  return (
    <div>
      <div className="flex justify-between p-3" onClick={toggleCreate}>
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
      {studentForm ? <CreateStudent /> : <StudentList />}
    </div>
  );
};

export default Students;
