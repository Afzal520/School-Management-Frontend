import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editStudent } from "../../feature/studentSlice";
const EditStudent = ({ studentId }) => {
  console.log(studentId);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    semester: "",
    course: "",
    subject: "",
    aadharCard: "",
    gender: "",
    age: "",
    fee: "",
    profilePhoto: null,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editStudent({ id: studentId, formData }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-6">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-xl sm:text-center font-bold">
          Update Student Details
        </h1>
      </header>
      <div className="max-w-2xl mx-auto bg-white p-2 sm:p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                value={formData.name}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2  border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="class"
              >
                Semester
              </label>
              <input
                type="text"
                id="class"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="course"
              >
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="aadharCard"
              >
                Aadhar Card
              </label>
              <input
                type="text"
                id="aadharCard"
                name="aadharCard"
                value={formData.aadharCard}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fee"
              >
                Fee
              </label>
              <input
                type="number"
                id="fee"
                name="fee"
                value={formData.fee}
                onChange={handleChange}
                className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="profilePhoto"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full sm:px-3 sm:py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
