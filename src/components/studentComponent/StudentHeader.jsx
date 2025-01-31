import React from "react";
import { MdMenu } from "react-icons/md";
import {useNavigate}  from "react-router-dom"
const StudentHeader = () => {
  const navigate = useNavigate()
  const scroll = window.screenY= "200px"
  console.log(scroll)
  return (
    <div className="bg-yellow-500 w-full  h-20 ">
      <div className="flex justify-between items-center h-18 p-2">
       
        <div className="">
          <h1>Name</h1>
        </div>

        <div className="cursor-pointer">
          <div onClick={()=>navigate("/studentProfile")} className="bg-white rounded-full h-12 w-12 "></div>
        </div>
      </div>
    </div>
  );
};

export default StudentHeader;
