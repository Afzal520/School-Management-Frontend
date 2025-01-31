import React from "react";
import { FaHome, FaUserGraduate, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-36 sm:w-45 bg-white shadow-lg overflow-hidden flex flex-col fixed">
      <div className="p-4 text-orange-500 text-xl font-bold">SM Info.</div>
      <nav className="mt-6 flex-grow">
        <ul>
          <li>
            <Link to={"/"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaHome className="mr-3" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/students"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaUserGraduate className="mr-3" /> Students
            </Link>
          </li>
          <li>
            <Link to={"/teachers"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaChalkboardTeacher className="mr-3" /> Teachers
            </Link>
          </li>
          <li>
            <Link to={"/courses"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaChalkboardTeacher className="mr-3" /> Courses
            </Link>
          </li>
          <li>
            <Link to={"/notes"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaCalendarAlt className="mr-3" /> Notes
            </Link>
          </li>
          <li>
            <Link to={"/marks"} className="p-4 hover:bg-gray-100 flex items-center">
              <FaCalendarAlt className="mr-3" /> Marks
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
