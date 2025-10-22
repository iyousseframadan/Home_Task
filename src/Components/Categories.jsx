import React from "react";

import { FaLaptop, FaBook, FaPalette } from "react-icons/fa";

const Categories = () => {

  const categoriesData = [
    {
      name: "قدرات",
      icon: <FaBook size={48} className="text-blue-500" />,
    },
    {
      name: "تحصيلي",
      icon: <FaBook size={48} className="text-green-500" />,
    },
    {
      name: "موهبة",
      icon: <FaPalette size={48} className="text-pink-400" />,
    },
    {
      name: "قدرات إنجليزي",
      icon: (
        <span className="text-5xl font-extrabold text-gray-700 h-[48px] flex items-center">
          GB
        </span>
      ),
    },
    {
      name: "البرامج التقنية",
      icon: <FaLaptop size={48} className="text-blue-400" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">الأقسام</h2>
        <p className="text-lg text-gray-500 mb-12">اختر المسار المناسب لك</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categoriesData.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer border border-gray-100  duration-300 "
            >
              <div className="flex justify-center mb-5 h-[48px] items-center">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-700">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
