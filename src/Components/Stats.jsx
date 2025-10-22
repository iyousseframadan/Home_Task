import React from "react";
import { FaUserGraduate, FaCheckCircle, FaBookOpen } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    { icon: <FaUserGraduate size={40} />, number: "10K+", text: "طالب شغوف" },
    { icon: <FaCheckCircle size={40} />, number: "98%", text: "نسبة النجاح" },
    { icon: <FaBookOpen size={40} />, number: "150+", text: "دورة تدريبية" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-purple-600 mb-3">{stat.icon}</div>
              <p className="text-4xl font-bold text-gray-800">{stat.number}</p>
              <p className="text-gray-500 mt-1">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
