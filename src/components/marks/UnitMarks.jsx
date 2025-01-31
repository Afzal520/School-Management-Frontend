import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {useDispatch, useSelector} from "react-redux"
import { useSearchParams } from "react-router-dom";
import { fetchStudents } from "../../feature/studentSlice";
const UnitMarks = () => {
  const [searchParams,setp] = useSearchParams();
  const studentId = searchParams.get("id"); // Get ID from URL
  const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchStudents());
    }, [dispatch]);
   
  const {studentData,loading ,error} = useSelector((state)=>state.student)
  console.log(studentData)
  const filterStudent = studentData?.studentList?.filter((student)=>student._id == studentId)
  console.log(filterStudent)
  const [formData, setFormData] = useState({
    schoolName:"City Group Of Management", // you can change college Name 
    boardName: "State Board of Education",
    studentName:"afzal",
    studentID:"1222",
    rollNumber:"*****",
    defaultStudentId:studentId,
    subjects: [
      {
        name: "Fundamental",
        marks: 85,
        obtainedMarks: "",
        total: 100,
        grade: "A",
      },
      {
        name: "Programing C",
        marks: 90,
        obtainedMarks: "",
        total: 100,
        grade: "A+",
      },
      {
        name: "Matha",
        marks: 78,
        obtainedMarks: "",
        total: 100,
        grade: "B+",
      },
      { name: "Basic Information", marks: 88, obtainedMarks: "", total: 100, grade: "A" },
      {
        name: "Soft skill",
        marks: 92,
        obtainedMarks: "",
        total: 100,
        grade: "A+",
      },
    ],
  });

  const marksheetRef = useRef();

  const handleChange = (index, field, value) => {
    const updatedSubjects = formData.subjects.map((subject, i) =>
      i === index ? { ...subject, [field]: value } : subject
    );
    setFormData({ ...formData, subjects: updatedSubjects });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/student/marks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Marks submitted successfully!");
      } else {
        alert("Failed to submit marks.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting marks.");
    }
  };

  const calculateTotal = () => {
    const totalMarks = formData.subjects.reduce(
      (sum, subject) => sum + subject.marks,
      0
    );
    const totalOutOf = formData.subjects.reduce(
      (sum, subject) => sum + subject.total,
      0
    );
    const percentage = ((totalMarks / totalOutOf) * 100).toFixed(2);
    return { totalMarks, totalOutOf, percentage };
  };

  const handlePrint = useReactToPrint({
    content: () => marksheetRef.current,
    documentTitle: `${formData.studentName}_Marksheet`,
    pageStyle: `
      @page {
        margin: 20mm;
      }
      body {
        font-family: Arial, sans-serif;
        -webkit-print-color-adjust: exact;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: center;
      }
      th {
        background-color: #f0f0f0;
      }
    `,
  });

  const { totalMarks, totalOutOf, percentage } = calculateTotal();
if(loading){
  return <div>Loading...........</div>
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        ref={marksheetRef}
        className="w-full max-w-3xl p-6 bg-white shadow-xl rounded-lg"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">{formData.schoolName}</h1>
          <h2 className="text-lg font-semibold">{formData.boardName}</h2>
          <p className="text-md mt-2">Academic Year: 2023-2024</p>
        </div>

        {/* Student Info */}
        <div className="mb-6">
          <p>
            <strong>Student Name:</strong> {formData.studentName}
          </p>
          <p>
            <strong>Student ID:</strong> {formData.defaultStudentId}
          </p>
          <p>
            <strong>Roll Number:</strong> {formData.rollNumber}
          </p>
        </div>

        {/* Subject Table (Responsive Inputs) */}
        <div className="overflow-x-auto">
          <form onSubmit={handleSubmit}>
            <div className="border-1">
              <ul className="grid grid-cols-5 gap-4 font-extrabold bg-gray-100 p-2">
                <li>Subject</li>
                <li>Marks</li>
                <li>Obtained Marks</li>
                <li>Total Marks</li>
                <li>Grade</li>
              </ul>

              {/* Loop over subjects and render rows */}
              {formData.subjects.map((subject, index) => (
                <ul
                  key={index}
                  className="grid grid-cols-5 gap-4 p-2 items-center border-b border-gray-300"
                >
                  <li>{subject.name}</li>
                  <li>
                    <input
                      className="w-full border border-amber-300 p-1 rounded-md"
                      type="text"
                      value={subject.marks}
                      onChange={(e) =>
                        handleChange(index, "marks", e.target.value)
                      }
                    />
                  </li>
                  <li>
                    <input
                      className="w-full border border-amber-300 p-1 rounded-md"
                      type="text"
                      value={subject.obtainedMarks}
                      onChange={(e) =>
                        handleChange(index, "obtainedMarks", e.target.value)
                      }
                    />
                  </li>
                  <li>
                    <input
                      className="w-full border border-amber-300 p-1 rounded-md"
                      type="text"
                      value={subject.total}
                      onChange={(e) =>
                        handleChange(index, "total", e.target.value)
                      }
                    />
                  </li>
                  <li>
                    <input
                      className="w-full border border-amber-300 p-1 rounded-md"
                      type="text"
                      value={subject.grade}
                      onChange={(e) =>
                        handleChange(index, "grade", e.target.value)
                      }
                    />
                  </li>
                </ul>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Remarks Section */}
        <div className="text-lg text-center font-semibold mt-6">
          {percentage >= 90
            ? "Outstanding Performance"
            : percentage >= 75
            ? "Excellent Performance"
            : percentage >= 50
            ? "Good Performance"
            : "Needs Improvement"}
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
  );
};

export default UnitMarks;
