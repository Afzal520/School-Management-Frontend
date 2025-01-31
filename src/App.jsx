import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Siderbar";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Students from "./pages/student/Students";
import Courses from "./components/Courses";
import Note from "./components/Note";
import Login from "./pages/Login";
import Teacher from "./pages/teacher/Teacher";
import Marks from "./pages/marks/Marks";
import StudentRegister from "./pages/registeration/Student";
import TeacherRegister from "./pages/registeration/Teacher";
import StudentLayout from "./pages/studentLayout/StudentLayout";
import PageNotFound from "./pages/PageNotFound";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/protectRoute/ProtectedRoute";
import { fetchAuth } from "./feature/authSlice";
import UnitMarks from "./components/marks/UnitMarks";
import StudentProfile from "./pages/studentLayout/StudentProfile";
import { useLocation } from "react-router-dom";
import StudentHeader from "./components/studentComponent/StudentHeader";
import StudentPdf from "./pages/studentLayout/StudentPdf";
import StudentResult from "./pages/studentLayout/StudentResult";
function App() {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true); // Ensure loading state
  const path = window.location.pathname;

  useEffect(() => {
    const checkAuth = async () => {
      if (userId) {
        await dispatch(fetchAuth({ id: userId }));
      }
      setIsLoading(false); // Set loading to false after authentication check
    };
    checkAuth();
  }, [dispatch, userId]);

  // 🚀 Show a loading screen until authentication is complete
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      {authData?.data?.role === "student" && <StudentHeader />}
      <div className="flex min-h-screen bg-gray-100">
        {/* Show Sidebar only if authenticated as admin */}
        {authData?.data?.role === "admin" && <Sidebar />}

        <div
          className={`${
            authData?.data?.role === "student" ||
            path == "/login" ||
            path == "/register"
              ? "flex-grow overflow-auto"
              : "ml-36 sm:ml-45 flex-grow overflow-auto p-6"
          }`}
        >
          <Routes>
            {/* Public Routes (Accessible Without Token) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register/student" element={<StudentRegister />} />
            <Route path="/register/teacher" element={<TeacherRegister />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected Student Route */}

            <Route
              path="/studentlayout"
              element={
                token ? (
                  <ProtectedRoute allowedRoles={["student"]}>
                    <StudentLayout />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/studentpdf"
              element={
                token ? (
                  <ProtectedRoute allowedRoles={["student"]}>
                    <StudentPdf />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
             <Route
              path="/studentresult"
              element={
                token ? (
                  <ProtectedRoute allowedRoles={["student"]}>
                    <StudentResult />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/studentprofile"
              element={
                token ? (
                  <ProtectedRoute allowedRoles={["student"]}>
                    <StudentProfile />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* Protected Admin/Teacher Routes */}
            <Route
              path="/"
              element={token ? <Layout /> : <Navigate to="/login" replace />}
            >
              <Route
                index
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/student/unitmark"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <UnitMarks />
                  </ProtectedRoute>
                }
              />
              <Route
                path="students"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Students />
                  </ProtectedRoute>
                }
              />
              <Route
                path="teachers"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Teacher />
                  </ProtectedRoute>
                }
              />
              <Route
                path="courses"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notes"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Note />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/marks"
                element={
                  <ProtectedRoute allowedRoles={["admin", "teacher"]}>
                    <Marks />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* Catch-all Route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
