import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-red-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold">CREATIVE IT INSTITUTE</h2>
      <ul className="mt-6">
        {["Dashboards", "Student", "Support", "Follow Up", "Academic", "Account"].map((item, index) => (
          <li key={index} className="p-3 hover:bg-red-700 rounded-md cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
