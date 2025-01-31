import React from "react";

const CourseStatus = () => {
  return (
    <div className="bg-red-700 text-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Course & Payment Status</h3>
      <p className="text-sm">Course Name: <strong>Professional Graphic Design</strong></p>
      <p className="text-sm">Batch Number: ES CEH 2105</p>
      <p className="text-sm">Course Duration: 6 Months</p>
      <p className="text-sm">Start Date: 1st February, 2022</p>
      <p className="text-sm">Payment Due: 19th January, 2022</p>

      <div className="mt-4">
        <p className="text-sm">Tuition Fee: <strong>10,000/-</strong></p>
        <p className="text-sm">Additional Fee: <strong>2,000/-</strong></p>
        <p className="text-sm">Discount: <strong>1,000/-</strong></p>
        <p className="text-sm text-yellow-300">Total Paid: 8,000/-</p>
        <p className="text-lg font-bold text-yellow-400">Due Amount: 3,000/-</p>
      </div>
      <button className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-md">Download Invoice</button>
    </div>
  );
};

export default CourseStatus;
