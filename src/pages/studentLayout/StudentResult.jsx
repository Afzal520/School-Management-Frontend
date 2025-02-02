import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult } from "../../feature/resultSlice";

const StudentResult = () => {
  const PracticalheetRef = useRef(null); // Ensure ref is initialized
  const [provideId, setProvideId] = useState("");
  const [foundResult, setFoundResult] = useState(false);
  const dispatch = useDispatch();
  console.log(PracticalheetRef);
  const { resultData, loading, error } = useSelector((state) => state.result);
  console.log("Result Data:", resultData);

  const handlePrint = useReactToPrint({
    content: () => {
      console.log("Checking PracticalheetRef:", PracticalheetRef.current);
      if (!PracticalheetRef.current) {
        alert(
          "Error: Nothing to print! Please ensure the marksheet is visible."
        );
        return null;
      }
      return PracticalheetRef.current;
    },
    documentTitle: `Marksheet_${
      resultData?.GetStudentResult?.studentName || "Student"
    }`,
    onBeforePrint: () => console.log("Printing started..."),
    onAfterPrint: () => console.log("Printing complete!"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (provideId) {
      const result = await dispatch(fetchResult({ id: provideId }));
      if (result?.payload?.success) {
        setFoundResult(true);
      }
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            onChange={(e) => setProvideId(e.target.value)}
            className="p-2 border-2"
            type="search"
            placeholder="Enter your Register ID"
          />
          <button className="p-2 border-2 bg-blue-500 text-white" type="submit">
            Search
          </button>
        </div>
      </form>

      {foundResult ? (
        <div
         
          className="flex items-center justify-center min-h-screen bg-gray-100"
        >
          <div className="w-full max-w-3xl p-6 bg-white shadow-xl rounded-lg">
            <div  ref={PracticalheetRef} className="">
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">City Group Of Management</h1>
                <h2 className="text-lg font-semibold">
                  State Board of Education
                </h2>
                <p className="text-md mt-2">Academic Year: 2023-2024</p>
              </div>

              {/* Student Info */}
              <div className="mb-6">
                <p>
                  <strong>Student Name:</strong>{" "}
                  {resultData?.GetStudentResult?.studentName}
                </p>
                <p>
                  <strong>Register ID:</strong>{" "}
                  {resultData?.GetStudentResult?.registerId}
                </p>
                <p>
                  <strong>Semester:</strong>{" "}
                  {resultData?.GetStudentResult?.semester}
                </p>
                <p>
                  <strong>Class:</strong>{" "}
                  {resultData?.GetStudentResult?.className}
                </p>
              </div>

              {/* Subject Table */}
              <div className="overflow-x-auto">
                <div className="border-1">
                  <ul className="grid grid-cols-5 gap-4 font-bold bg-gray-100 p-2">
                    <li>Subject</li>
                    <li>Practical</li>
                    <li>Obtained Marks</li>
                    <li>Total Marks</li>
                    <li>Grade</li>
                  </ul>

                  {resultData?.GetStudentResult.subjects.map(
                    (subject, index) => (
                      <ul
                        key={index}
                        className="grid grid-cols-5 gap-4 p-2 border-b border-gray-300"
                      >
                        <li>{subject.name}</li>
                        <li className="w-full border border-amber-300 p-2 rounded-md">
                          {subject.marks}
                        </li>
                        <li className="w-full border border-amber-300 p-2 rounded-md">
                          {subject.obtainedMarks}
                        </li>
                        <li className="w-full border border-amber-300 p-2 rounded-md">
                          {subject.total}
                        </li>
                        <li className="w-full border border-amber-300 p-2 rounded-md">
                          {subject.grade}
                        </li>
                      </ul>
                    )
                  )}
                </div>
              </div>

              {/* Performance Section */}
              <div className="text-lg text-center font-semibold mt-6">
                {resultData?.GetStudentResult?.percentage >= 90
                  ? "Outstanding Performance"
                  : resultData?.GetStudentResult?.percentage >= 75
                  ? "Excellent Performance"
                  : resultData?.GetStudentResult?.percentage >= 50
                  ? "Good Performance"
                  : "Needs Improvement"}
              </div>
            </div>

            {/* Print Button */}
            <div className="text-center mt-6">
              <button
                onClick={handlePrint}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Print Marksheet
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          Please enter the <strong>Register ID</strong> in the search box to
          find your <strong>Result</strong>.
        </div>
      )}
    </div>
  );
};

export default StudentResult;
