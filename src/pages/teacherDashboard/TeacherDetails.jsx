import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchTeacher } from "../../feature/teacher";
const TeacherDetails = ({ settoggleDetails }) => {
  const [searchParams, setp] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingPurpose, setMeetingPurpose] = useState("");
  const teacherId = searchParams.get("id"); // Get ID from URL
  const { teacherData, loading, error } = useSelector((state) => state.teacher);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(fetchTeacher());
      setIsLoading(false); // Set loading to false after authentication check
    };
    checkAuth();
  }, [dispatch]);
  const closeTeacherDetails = () => {
    settoggleDetails(false);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredDetails = teacherData?.teacherData?.find(
    (teacher) => teacher.registerId == teacherId
  );
 
  const teacher = {
    name: `${filteredDetails.fullName || null} `,
    teacherId: `${filteredDetails.registerId || null}`,
    email: `${filteredDetails.teacherEmail || null}`,
    phone: `${filteredDetails.contact || null}`,
    department: "Computer Science",
    designation: "Professor",
    office: `${filteredDetails.address || null}`,
    profileImage: `${filteredDetails.profilePhoto || filteredDetails.fullName}`,
  };

  // State for scheduling a meeting

  // State for sending an email

  // Handle meeting scheduling
  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    alert(
      `Meeting Scheduled!\nDate: ${meetingDate}\nTime: ${meetingTime}\nPurpose: ${meetingPurpose}`
    );
    setMeetingDate("");
    setMeetingTime("");
    setMeetingPurpose("");
  };

  // Handle sending an email
  const handleSendEmail = (e) => {
    e.preventDefault();
    alert(`Email Sent!\nSubject: ${emailSubject}\nBody: ${emailBody}`);
    setEmailSubject("");
    setEmailBody("");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 p-6">
          <h1 className="text-3xl font-bold text-white">Teacher Profile</h1>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200">
              <img
                src={teacher.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Teacher Details */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {teacher.name}
                </h2>
                <p className="text-gray-600">Teacher ID: {teacher.teacherId}</p>
              </div>

              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {teacher.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> {teacher.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Department:</span>{" "}
                  {teacher.department}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Designation:</span>{" "}
                  {teacher.designation}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Office:</span>{" "}
                  {teacher.office}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Meeting Section */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Schedule a Meeting
          </h3>
          <form onSubmit={handleScheduleMeeting} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="time"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Purpose
              </label>
              <textarea
                value={meetingPurpose}
                onChange={(e) => setMeetingPurpose(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Enter the purpose of the meeting"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Schedule Meeting
            </button>
          </form>
        </div>

        {/* Send Email Section */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Send an Email
          </h3>
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email subject"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Body
              </label>
              <textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Enter email body"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
