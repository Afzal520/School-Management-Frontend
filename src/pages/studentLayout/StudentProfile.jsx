import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../feature/studentSlice";

const StudentProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authData } = useSelector((state) => state.auth);
  const { studentData, loading, error } = useSelector((state) => state.student);

  // State to store filtered student
  const [filteredStudent, setFilteredStudent] = useState(null);

  useEffect(() => {
    // Fetch student data
    const fetchData = async () => {
      const response = await dispatch(fetchStudents());
      if (response?.payload?.studentList) {
        const student = response.payload.studentList.find(
          (stu) => stu.registerId === authData?.data?.registerId
        );
        setFilteredStudent(student); // Set state with filtered student
      }
    };

    fetchData();
  }, [dispatch, authData]);



  if (loading) return <div>Loading...........</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 flex p-6 text-white items-center gap-4">
          <FaLongArrowAltLeft className="text-4xl cursor-pointer" onClick={() => navigate(-1)} />
          <h1 className="text-3xl font-bold">Student Profile</h1>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <img src={filteredStudent?.profilePhoto || "default-avatar.png"} alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Student Details */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">{filteredStudent?.fullName || "N/A"}</h2>
              <p className="text-gray-600">Student ID: {filteredStudent?.registerId || "N/A"}</p>
              <p className="text-gray-700"><span className="font-semibold">Email:</span> {filteredStudent?.email || "N/A"}</p>
              <p className="text-gray-700"><span className="font-semibold">Phone:</span> {filteredStudent?.phone || "N/A"}</p>
              <p className="text-gray-700"><span className="font-semibold">Address:</span> {filteredStudent?.address || "N/A"}</p>
              <p className="text-gray-700"><span className="font-semibold">Course:</span> {filteredStudent?.course || "N/A"}</p>
              <p className="text-gray-700"><span className="font-semibold">Semester:</span> {filteredStudent?.semester || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h3>
          <p className="text-gray-700"><span className="font-semibold">Date of Birth:</span> {filteredStudent?.dob || "N/A"}</p>
          <p className="text-gray-700"><span className="font-semibold">Gender:</span> {filteredStudent?.gender || "N/A"}</p>
          <p className="text-gray-700"><span className="font-semibold">Enrollment Date:</span> {filteredStudent?.enrollmentDate || "N/A"}</p>
          <p className="text-gray-700"><span className="font-semibold">Status:</span> Active</p>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
