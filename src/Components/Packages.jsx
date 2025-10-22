import React from "react";

import { FiPackage } from "react-icons/fi";
import { FaGift, FaBolt } from "react-icons/fa";

const Packages = () => {
  const packagesData = [
    {
      title: "باقة القدرات الشاملة",
      description: "قدرات وتدريب 2026 (كمي ولفظي)",
    },
    {
      title: "باقة التحصيلي الشاملة",
      description: "تأسيس وتدريب 2026 (جميع المواد)",
    },
    {
      title: "باقة القدرات والتحصيلي",
      description: "تأسيس وتدريب 2026 (كمي ولفظي)",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center gap-2 mx-auto mb-10 inline-flex">
            <FaGift />
            <span className="text-3xl">الباقات الخاصة</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-xl text-center flex flex-col items-center
                         transition-all duration-300 hover:scale-105"
            >
              {/* تم تغيير الأيقونة ولونها وحجمها */}
              <div className="text-amber-600 mb-6">
                <FiPackage size={60} />
              </div>
              <h3 className="font-bold text-2xl mb-3 text-gray-800">
                {pkg.title}
              </h3>
              <p className="text-gray-500 mb-8">{pkg.description}</p>
              <button
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-3 rounded-lg mt-auto flex items-center justify-center gap-2
                                 transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:scale-105 "
              >
                <FaBolt />
                <span>اشترك الآن</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
