import React, { useState } from "react";
import CreateTeacher from "../../components/teacher/CreateTeacher";
import TeacherList from "../../components/teacher/TeacherList";

const Teacher = () => {
  const [toggleForm, settoggleForm] = useState(false);
  const toggleTeacherForm = () => {
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
