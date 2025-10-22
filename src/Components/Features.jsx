import React from "react";

import {
  FaBullseye,
  FaVideo,
  FaLayerGroup,
  FaCalendarAlt,
  FaCheckSquare,
  FaBookOpen,
} from "react-icons/fa";

const Features = () => {
  
  const featuresData = [
    {
      icon: <FaLayerGroup size={48} />, 
      title: "تأسيس",
      subtitle: "من البداية",
    },
    {
      icon: <FaBullseye size={48} />,
      title: "تدريب",
      subtitle: "حتى الاحتراف",
    },
    {
      icon: <FaVideo size={48} />,
      title: "فيديوهات",
      subtitle: "بجودة عالية",
    },
    {
      icon: <FaCheckSquare size={48} />,
      title: "إختبارات",
      subtitle: "محاكاة باستمرار",
    },
    {
      icon: <FaBookOpen size={48} />, 
      title: "مواد علمية",
      subtitle: "مميزة",
    },
    {
      icon: <FaCalendarAlt size={48} />,
      title: "جدول زمني",
      subtitle: "يناسب مستواك",
    },
  ];

  return (

    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          مميزات المنصة
        </h2>
        <p className="text-lg text-gray-500 mb-12">
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}

              className="bg-purple-600 text-white p-10 rounded-2xl flex flex-col items-center justify-center
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer "
            >

              <div className="mb-5 text-yellow-500">{feature.icon}</div>
              <h3 className="font-bold text-2xl mb-1">{feature.title}</h3>
              <p className="text-white/80 text-base">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
