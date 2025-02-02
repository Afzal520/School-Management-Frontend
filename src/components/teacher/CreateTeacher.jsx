import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { createTeacher } from "../../feature/teacher";
//import { addTeacher } from "../../feature/teacherSlice";

const CreateTeacher = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    aadharCard: "",
    email: "",
    contact: "",
    address: "",
    qualification: "",
    subject: "",
    categories: "",
    teacherId:"",
    gender: "",
    age: "",
    salary: "",
    degree: "",
    profilePhoto:null,
    experience: "",
  });

  const dispatch = useDispatch();

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
      const response = await fetch("http://localhost:5000/api/teacher/register", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const newStudent = await response.json();
        setStudents([...students, newStudent]);
      // Reset form data
    // setFormData({
    //   fullName: "",
    //   aadharCard: "",
    //   email: "",
    //   contact: "",
    //   address: "",
    //   profilePhoto:null,
    //   qualification: "",
    //   subject: "",
    //   categories: "",
    //   gender: "",
    //   age: "",
    //   salary: "",
    //   degree: "",
    //   experience: "",
    // });
      } else {
        console.error("Failed to add Teacher");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 rounded mb-6">
        <h1 className="text-xl font-bold">Create Teacher</h1>
      </header>
      <div className="max-w-2xl mx-auto bg-white p-2 md:p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Teacher</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadharCard">
                Aadhar Card
              </label>
              <input
                type="text"
                id="aadharCard"
                name="aadharCard"
                value={formData.aadharCard}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qualification">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">
                Categories
              </label>
              <input
                type="text"
                id="categories"
                name="categories"
                value={formData.categories}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                Salary
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
               TeacherId
              </label>
              <input
                type="text"
                id="teacherId"
                name="teacher"
                value={formData.teacherId}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                Degree
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
              Experience
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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

export default CreateTeacher;