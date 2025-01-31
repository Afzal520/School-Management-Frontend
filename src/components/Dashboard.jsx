import React, { useEffect, useState } from "react";
import StudentWidget from "./widget/student";
import TeacherWidget from "./widget/Teacher";
import PrivateTeacher from "./widget/PrivateTeacher";
import { useDispatch } from "react-redux";
import { fetchStudents } from "../feature/studentSlice";
import { fetchTeacher } from "../feature/teacher";
function Dashboard() {
  const [studentData, setstudentData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchTeacher())

  }, [dispatch]);
  return (
    <div className="flex-1 p-3 sm:6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid sm:grid-cols-3 gap-2 sm:gap-6 mb-6">
        <div className="" >
          <StudentWidget />
        </div>
        <div className="">
          <TeacherWidget />
        </div>
        <div className="">
          <PrivateTeacher />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid sm:grid-cols-3 sm:gap-6 gap-3">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-bold mb-4">Management Value</h2>
          {/* Add a chart library for rendering charts */}
          <p>Chart Placeholder</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="font-bold mb-4">Distribution</h2>
          <p>Chart Placeholder</p>
        </div>
      </div>

      {/* Subject Tasks */}
      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="font-bold mb-4">Subject Task</h2>
        {/* Progress Bars */}
        <div>
          <p>Mathematics: 80%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div>
          <p>English: 92%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "92%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
