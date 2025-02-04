import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchTeacher } from "../../feature/teacher";

const TeacherList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams(); 
    
    useEffect(() => {
      dispatch(fetchTeacher());
    }, [dispatch]);
  
    const { teacherData, loading } = useSelector((state) => state.teacher);
  
   
    if (loading) return <h1 className="text-center">Fetching Teacher Data...</h1>;
  
    const filteredTeachers = teacherData?.teacherData?.filter((teacher) =>
      teacher.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const toggleTeacherDetails = (id) => {
      setSearchParams({ id });
      navigate(`/teachers/details?id=${id}`);
    };
  
    return (
      <div className="h-screen w-full px-4">
        <div className="w-full">
          <input
            className="border border-gray-300 w-full p-2 mb-3 rounded"
            placeholder="Search Teacher"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="min-h-screen bg-gray-100 py-4">
          <div className="mx-auto bg-white rounded-lg shadow-md overflow-auto">
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
                      <th className="px-4 py-2 border border-gray-200">Contact</th>
                      <th className="px-4 py-2 border border-gray-200">Subject</th>
                      <th className="px-4 py-2 border border-gray-200">Teacher ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeachers?.map((teacher, index) => (
                      <tr
                        key={teacher.registerId}
                        className="hover:bg-gray-50 text-center cursor-pointer"
                        onClick={() => toggleTeacherDetails(teacher.registerId)}
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
                          {teacher.subject}
                        </td>
                        <td className="px-4 py-2 border border-gray-200">
                          {teacher.registerId}
                        </td>
                      </tr>
                    ))}
                    {filteredTeachers?.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500">
                          No Teachers Found
                        </td>
                      </tr>
                    )}
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
  