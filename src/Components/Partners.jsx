import React from "react";

import {
  FaBuilding,
  FaGraduationCap,
  FaUniversity,
  FaHandshake,
} from "react-icons/fa";

const Partners = () => {

  const partnersData = [
    {
      id: 4,
      icon: <FaBuilding size={60} className="text-purple-600" />,
      bgColor: "white", // بطاقة بيضاء
    },
    {
      id: 3,
      icon: <FaUniversity size={60} className="text-yellow-500" />,
      bgColor: "purple",
    },
    {
      id: 2,
      icon: <FaGraduationCap size={60} className="text-purple-600" />,
      bgColor: "white",
    },
    {
      id: 1,
      icon: <FaHandshake size={60} className="text-yellow-400" />,
      bgColor: "purple",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          شركاء النجاح
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          نفخر بثقة عملائنا وشركائنا في مسيرة النجاح
        </p>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className={`p-12 rounded-3xl shadow-lg flex justify-center items-center
                          transition-all duration-300 hover:scale-105 cursor-pointer
                          ${
                            partner.bgColor === "purple"
                              ? "bg-purple-600"
                              : "bg-white"
                          }`}
            >
              {partner.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
