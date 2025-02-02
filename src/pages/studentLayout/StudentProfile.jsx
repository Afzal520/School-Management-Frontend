import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
const StudentProfile = () => {
  const {authData} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
   useEffect(()=>{
    const checkStudent = async ()=>{
     await dispatch()
    }
   })
  console.log(authData)
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white  shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 flex p-6 text-white items-center gap-4">
          <div className="cursor-pointer">
          <FaLongArrowAltLeft className="text-4xl " onClick={() => navigate(-1)} />
          </div>
          <h1 className="text-3xl font-bold">Student Profile</h1>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <img alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Student Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">fullName</h2>
                <p className="text-gray-600">Student ID: </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span>{" "}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span>{" "}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Course:</span>{" "}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Semester:</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Additional Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Date of Birth:</span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Gender:</span>
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Enrollment Date:</span>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Status:</span> Active
              </p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Edit Profile
            </button>

            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
              Delete Account
            </button>
          </div>
        </div>

        {/* Action Buttons */}
      </div>
    </div>
  );
};

export default StudentProfile;
