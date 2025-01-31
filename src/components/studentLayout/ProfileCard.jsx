import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-red-600 text-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full border-2 border-white"
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User"
        />
        <div>
          <h2 className="text-xl font-semibold">Md. Moklesur Rahman</h2>
          <p className="text-sm">Mobile: 01793670321</p>
          <p className="text-sm">Email: moklesur24@gmail.com</p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded-md">Send Auth Mail</button>
        </div>
      </div>
      <p className="mt-4 text-sm">Batch: ES CEH 2105</p>
    </div>
  );
};

export default ProfileCard;
