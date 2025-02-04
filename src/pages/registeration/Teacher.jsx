import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherRegister = () => {
const [registerId,setregisterId] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mobile,setMobile] = useState("")
  const [fullName, setfullName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const handleOption = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (role == "") {
      return alert("Please Set Your Role first");
    }
    e.preventDefault();

    const loginData = {
      registerId,
      password,
      fullName,
      role,
      mobile
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Register Successfully", data);

        navigate("/login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Register failed");
      }
     
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center  sm:items-center h-screen bg-gray-100">
      <div className="bg-white p-2 sm:p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Register</h2>
        <div className="flex justify-end">
          <select onChange={handleOption} className="border-1" name="" id="">
            <option value="">Choose Role</option>
           
            <option value="teacher">Teachers</option>
            
          </select>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              FullName
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter You FullName"
              required
            />
          </div>
          <div className="flex gap-2">
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
            TeacherId
            </label>
            <input
              type="text"
              id="teacherId"
              value={registerId}
              onChange={(e) => setregisterId(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
           Contact
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className=" flex gap-2">
            <p>Already Account </p>
            <Link to={"/login"} className="text-blue-400 underline">
              Login
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherRegister;
