import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../feature/authSlice";

const Login = () => {
  const [registerId, setresgisterId] = useState("");
  const [contact,setcontact]= useState("")
  const [fullName,setfullName] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const loginData = {
    registerId,
      password,
      contact,

    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      if (!result?.user || !result?.user.role) {
        throw new Error("Invalid user data received from server");
      }

      // Store user details in localStorage
      localStorage.setItem("token", result.user._id);
      localStorage.setItem("userId", result.user._id);
      const userId = localStorage.getItem("userId");
      console.log("User Role:", result.user.role);
      const checkAuth = async () => {
        if (userId) {
          await dispatch(fetchAuth({ id: userId }));
          setIsLoading(false);
        }
      };
      checkAuth();
      // Navigate based on role
      if (result.user.role === "student") {
        navigate("/studentlayout");
      } else if (result.user.role === "teacher") {
        navigate("/");
      } else if (result.user.role === "admin") {
        navigate("/");
      } else {
        throw new Error("Invalid role received");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contact"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              StudentId
            </label>
            <input
              type="text"
              id="studentId"
              value={registerId}
              onChange={(e) => setresgisterId(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your StudentId"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex gap-2">
            <p>Don't have an account?</p>
            <Link className="text-blue-500 underline" to={"/register/student"}>
              Student
            </Link>
            <Link className="text-blue-500 underline" to={"/register/teacher"}>
              Teacher
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
