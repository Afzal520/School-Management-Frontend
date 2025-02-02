import React, { useState } from "react";

const CreateStudent = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    semester: "",
    course: "",
    subject: "",
    studentEmail: "",
    gender: "",
    dob: "",
    fee: "",
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePhoto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/register/stud", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const newStudent = await response.json();
        setStudents([...students, newStudent]);
        setFormData({
          fullName: "",
          semester: "",
          course: "",
          subject: "",
          aadharCard: "",
          studentEmail:"",
          gender: "",
          age: "",
          fee: "",
          profilePhoto: null,
        });
      } else {
        console.error("Failed to add student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-6">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-xl sm:text-center font-bold">
         Student Registration Form 
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
              email
              </label>
              <input
                type="text"
                id="studentEmail"
                name="studentEmail"
                value={formData.studentEmail}
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
                DOB
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
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
              required
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

export default CreateStudent;
