import React, { useState } from "react";
import CreateTeacher from "./TeacherCreate";

import TeacherList from "./TeacherList";
import { useNavigate } from "react-router-dom";

const Teacher = () => {
  const [toggleForm, settoggleForm] = useState(false);

  const navigate = useNavigate();
  const toggleTeacherForm = () => {
    navigate(`/teacher/create`);
    settoggleForm(!toggleForm);
  };
  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="">Teacher</div>
        <div className="">
          <button className="border-2 px-2 rounded" onClick={toggleTeacherForm}>
            {toggleForm ? "Back" : "Add teacher"}
          </button>
        </div>
      </div>
      {toggleForm ? <CreateTeacher /> : <TeacherList />}
    </div>
  );
};

export default Teacher;
