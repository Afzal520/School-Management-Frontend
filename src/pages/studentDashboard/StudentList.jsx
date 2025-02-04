import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editStudent, fetchStudents } from "../../feature/studentSlice";
import EditStudent from "./EditStudent";
import { IoLocationOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa6";
import StudentDetails from "./StudentDetails";
import { useNavigate, useSearchParams } from "react-router-dom";
const StudentList = () => {
  const dispatch = useDispatch();
  const [editComponent, seteditComponent] = useState(false);
  const [toggleDetails, settoggleDetails] = useState(false);
  const [searchParams,setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("");
  const [studentId, setstudentId] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const { studentData, loading, error } = useSelector((state) => state.student);

  if (loading) {
    return <h1>Loading DATA...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  const editForm = (id) => {
    setstudentId(id);
    seteditComponent(true);
  };
  const toggleStudentDetails = (id) => {
    setSearchParams(id)
    navigate(`/students/detail?id=${id}`)
    // setstudentId(id);
    // settoggleDetails(true);
  };
  const closeStudentDetails = () => {
    settoggleDetails(false);
  };
  // if (toggleDetails) {
  //   return (
  //     <StudentDetails
  //       studentId={studentId}
  //       closeStudentDetails={closeStudentDetails}
  //     />
  //   );
  // }

  const filteredStudents = studentData?.studentList?.filter((student) =>
    student.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-xl font-bold text-center">Student List</h1>
      </header>
      <div className="bg-white p-4 rounded shadow-md overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Students</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
       
        <div className="min-h-screen bg-gray-100 py-4">
          <div className=" mx-auto bg-white rounded-lg shadow-md overflow-auto">
            {/* Table Section */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Student List
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border border-gray-200">S.N</th>
                      <th className="px-4 py-2 border border-gray-200">Name</th>
                      <th className="px-4 py-2 border border-gray-200">
                        Contact
                      </th>
                      <th className="px-4 py-2 border border-gray-200">
                        Semester
                      </th>
                      <th className="px-4 py-2 border border-gray-200">
                        Student ID
                      </th>
                      <th className="px-4 py-2 border border-gray-200">
                        DEPARMENT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents?.map((student, index) => (
                      <tr
                        key={student.id}
                        className="hover:bg-gray-50 text-center"
                        onClick={() => toggleStudentDetails(student.registerId)}
                      >
                        <td className="px-4 py-2 border border-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {student.fullName}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {student.contact}
                        </td>
                      
                        <td className="px-4 py-2 border border-gray-200">
                          {student.semester}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {student.registerId}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {student.course}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
