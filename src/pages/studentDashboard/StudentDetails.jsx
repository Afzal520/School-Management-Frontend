import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnitMarks from "./UnitMarks";
import EditStudent from "./EditStudent";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchStudents } from "../../feature/studentSlice";
const StudentDetails = ({ closeStudentDetails }) => {

  const [toggleeditForm, settoggleeditForm] = useState(false);
  const [editComponent, seteditComponent] = useState(false);
  const [searchParams, setsearchParams] = useSearchParams();
  const { studentData, loading, error } = useSelector((state) => state.student);
  const studentId = searchParams.get("id");

  const navigate = useNavigate();
  const [toggleMark, settoggleMarks] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (studentId) {
        await dispatch(fetchStudents());

        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading........</div>;
  }
  const filteredStudent = studentData?.studentList?.filter(
    (student) => student.registerId == studentId
  );


  const student = {
    name: filteredStudent[0].fullName || null,
    registerId: filteredStudent[0].registerId || null,
    studentEmail: filteredStudent[0].studentEmail || null,
    phone: filteredStudent[0].contact || null,
    address: filteredStudent[0].address || null,
    course: filteredStudent[0].course || null,
    semester: filteredStudent[0].semester || null,
    profileImage: filteredStudent[0].profilePhoto, // Placeholder image URL
  };

  
  const handleChange = (id) => {
    setsearchParams({ id });
    navigate(`/student/unitmark?id=${id}`); // Navigate to the details page with the ID
  };

  const toggleEditStudent = (id) => {
    console.log(id)
   setsearchParams(id)
    navigate(`/students/edit?Id=${id}`);
  };
 
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white">Student Profile</h1>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <img
                src={student.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Student Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {student.name}
                </h2>
                <p className="text-gray-600">
                  Student ID: {student.registerId}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  {student.studentEmail}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> {student.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span>{" "}
                  {student.address}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Course:</span>{" "}
                  {student.course}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Semester:</span>{" "}
                  {student.semester}
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
                {filteredStudent[0].dob}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Gender:</span>
                {filteredStudent[0].gender}
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-semibold">Enrollment Date:</span>
                {filteredStudent[0].createdAt}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Status:</span> Active
              </p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={()=>toggleEditStudent(studentId)}
            >
              Edit Profile
            </button>
            <button
              onClick={() => handleChange(studentId)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Marks
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

export default StudentDetails;
