import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeacher } from "../../feature/teacher";
import TeacherDetails from "./TeacherDetails";
const TeacherList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeacher());
  }, [dispatch]);
  const [searchQuery, setsearchQuery] = useState("");
  const [toggleDetails,settoggleDetails] = useState(false)
  const [teacherId,setteacherId] = useState("")
  const { teacherData, loading } = useSelector((state) => state.teacher);
  if (loading) {
    return <h1>Teacher DATA Fetching..........</h1>;
  }

  const filteredTeacher = teacherData?.teacherData?.filter((teacher) =>
    teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
const toggleTeacherDetails = (teacherId)=>{
  settoggleDetails(true)
   setteacherId(teacherId)
}

if(toggleDetails){
  return <TeacherDetails settoggleDetails={settoggleDetails} teacherId={teacherId}/>
}
  return (
    <div className=" h-screen w-full px-4">
      <div className="w-full">
        <input
          className="border-1 w-full p-2 mb-3"
          placeholder="Search Teacher"
          type="search"
          name=""
          value={searchQuery}
          id=""
          onChange={(e) => setsearchQuery(e.target.value)}
        />
      </div>
      <div className="min-h-screen bg-gray-100 py-4">
          <div className=" mx-auto bg-white rounded-lg shadow-md overflow-auto">
            {/* Table Section */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Teacher List
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
                       Subject
                      </th>
                      <th className="px-4 py-2 border border-gray-200">
                       TeacherId
                      </th>
                      
                      <th className="px-4 py-2 border border-gray-200">
                        DEPARTMENT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeacher?.map((teacher, index) => (
                      <tr
                        key={teacher.id}
                        className="hover:bg-gray-50 text-center"
                        onClick={() => toggleTeacherDetails(teacher._id)}
                      >
                        <td className="px-4 py-2 border border-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.fullName}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.contact}
                        </td>
                      
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.semester}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.studentId}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.studentId}
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
  );
};

export default TeacherList;
