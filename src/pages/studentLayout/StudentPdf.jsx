import React, { useEffect } from "react";

const StudentPdf = () => {

  return (
    <div className="min-h-screen bg-gray-100 ">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-xl font-bold text-center">Pdf List</h1>
      </header>
      <div className="bg-white p-1 rounded shadow-md overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Notes</h2>
        <input
          type="text"
          placeholder="Search by name"
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />

        <div className="min-h-screen bg-gray-100 ">
          <div className=" mx-auto bg-white rounded-lg shadow-md overflow-auto">
            {/* Table Section */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Note List
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className=" py-2 border border-gray-200">S.N</th>
                      <th className=" py-2 border border-gray-200">Name</th>

                      <th className=" py-2 border border-gray-200">
                        Semester
                      </th>

                      <th className=" py-2 border border-gray-200">
                       Department
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {filteredStudents?.map((student, index) => ( */}
                    <tr
                      //   key={student.id}
                      className="hover:bg-gray-50 text-center"
                      // onClick={() => toggleStudentDetails(student._id)}
                    >
                      <td className=" py-2 border border-gray-200">
                        {/* {index + 1} */}
                      </td>
                      <td className=" py-2 border border-gray-200">
                        {/* {student.fullName} */}
                      </td>

                      <td className=" py-2 border border-gray-200">
                        {/* {student.studentId} */}
                      </td>
                      <td className=" py-2 border border-gray-200">
                        {/* {student.studentId} */}
                      </td>
                    </tr>
                    {/* ))} */}
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

export default StudentPdf;
