import React, { useEffect } from "react";
import { BiSolidSchool } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { PiExamBold } from "react-icons/pi";
import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineMoreTime, MdOutlineNotificationsActive, MdOutlineSyncProblem } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../../feature/authSlice";

const StudentLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(fetchAuth());
  //   }
  // }, [dispatch, userId]); 

  // const { authData, loading } = useSelector((state) => state.auth);

  // if (loading) {
  //   return <div className="text-center text-lg font-semibold">Loading...</div>;
  // }

  return (
    <div>
      {/* Header Image */}
      <div className="w-full">
        <img
          width={900}
          src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
          alt="School Building"
        />
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-4 text-center mt-5 gap-4">
        <div className="flex flex-col justify-center items-center">
          <BiSolidSchool className="text-4xl w-14 h-14 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">College</p>
        </div>
        <button onClick={() => navigate("/studentpdf")} className="flex flex-col justify-center items-center">
          <GrDocumentPdf className="text-4xl w-14 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Notes</p>
        </button>
        <div className="flex flex-col justify-center items-center">
          <GiStairsGoal className="text-4xl w-12 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Performance</p>
        </div>
        <button onClick={() => navigate("/studentresult")} className="flex flex-col justify-center items-center">
          <PiExamBold className="text-4xl w-12 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Result</p>
        </button>

        <div className="flex flex-col justify-center items-center">
          <MdOutlineMoreTime className="text-4xl w-12 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Time Table</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineNotificationsActive className="text-4xl w-12 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Notifications</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineSyncProblem className="text-4xl w-12 h-12 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold">Complaint</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
