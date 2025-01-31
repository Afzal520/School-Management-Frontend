// import React from "react";
// import Sidebar from "../../components/studentLayout/Sidebar";
// import ProfileCard from "../../components/studentLayout/ProfileCard";
// import CourseStatus from "../../components/studentLayout/CourseStatus";

// function StudentLayout() {
//   return (
//     <div className="flex bg-gray-900 min-h-screen text-white">
//       <Sidebar />
//       <main className="flex-1 p-6">
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <ProfileCard />
//             <div className="mt-6 bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-xl font-semibold">Personal Details</h2>
//               <p>Father's Name: Md. Foklesur Rahman</p>
//               <p>Mother's Name: Rahima Khatun</p>
//               <p>Guardian Phone: 018019324678</p>
//               <p>Birth Date: 1 January 1996</p>
//               <p>Gender: Male</p>
//               <p>Blood Group: B+</p>
//               <p>Religion: Islam</p>
//               <p>Occupation: Student</p>
//             </div>
//           </div>
//           <CourseStatus />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default StudentLayout;

import React from "react";
import { BiSolidSchool } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { PiExamBold } from "react-icons/pi";
import { GiStairsGoal } from "react-icons/gi";
import { MdOutlineMoreTime } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineSyncProblem } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import StudentHeader from "../../components/studentComponent/StudentHeader";
const StudentLayout = () => {
  const navigate = useNavigate()
  return (
    <div>
    
   
      <div className="">
        <div className="w-full">
          <img
            width={900}
            src="https://media.istockphoto.com/id/171306436/photo/red-brick-high-school-building-exterior.jpg?s=612x612&w=0&k=20&c=vksDyCVrfCpvb9uk4-wcBYu6jbTZ3nCOkGHPSgNy-L0="
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="grid grid-cols-4 text-center center mt-5 gap-4 ">
        <div className=" flex flex-col justify-center items-center">
          <BiSolidSchool className="text-4xl w-14 h-14 bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">College</p>
        </div>
        <div onClick={()=>navigate("/studentpdf")}  className="flex flex-col justify-center items-center">
          <GrDocumentPdf className="text-4xl w-14 h-12  bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Notes</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <GiStairsGoal className="text-4xl w-12 h-12  bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Parformance</p>
        </div>
        <div onClick={()=>navigate("/studentresult")} className="flex flex-col justify-center   items-center">
          <PiExamBold className="text-4xl  w-12 h-12   bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Result</p>
        </div>

        
        <div className="flex flex-col justify-center items-center">
          <MdOutlineMoreTime className="text-4xl w-12 h-12  bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Time Table</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineNotificationsActive className="text-4xl w-12 h-12  bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Time Table</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MdOutlineSyncProblem className="text-4xl w-12 h-12  bg-blue-100 opacity-80 rounded" />
          <p className="font-bold ">Complaint</p>
        </div>
      </div>
    </div>
  );
};

export default StudentLayout;
