import React from "react";
import {
  FaUserPlus,
  FaGift,
  FaTasks,
  FaBullseye,
  FaChartLine,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Hero = () => {
  const featureCards = [
    {
      icon: <FaChartLine size={24} />,
      title: "اختبارات تفاعلية",
      subtitle: "أكثر من 5000 سؤال",
    },
    {
      icon: <FaGraduationCap size={24} />,
      title: "معلمون خبراء",
      subtitle: "خبرة أكثر من 10 سنوات",
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      title: "تدريب مكثف",
      subtitle: "متابعة يومية مستمرة",
    },
  ];

  const statsData = [
    { number: "150+", text: "دورة تدريبية" },
    { number: "98%", text: "نسبة النجاح" },
    { number: "10K+", text: "طالب شغوف" },
  ];

  return (
    <div className="bg-gradient-to-tl from-purple-300  to-purple-600 text-white pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ">
          {/* Right Side: Text and Buttons */}
          <div className="w-full lg:w-6/12 text-center lg:text-right  ">
            <span className=" bg-primary text-white border border-white/20 font-bold px-6 py-3 rounded-full text-sm inline-block mb-4">
              ✨ الأفضل في المملكة
            </span>
            <h1 className="text-4xl md:text-6xl font-black my-6 leading-tight ">
              أهلاً بكم في منصة <br />{" "}
              <span className="text-yellow-300">المئة التعليمية</span>
            </h1>

            <span className="text-yellow-300 text-3xl font-bold mb-4 inline-block">
              {" "}
              تأسيس من البداية وتدريب حتى الإتقان.
            </span>

            <p className="text-lg text-white/80 mb-8">
              انضم لأكثر من 10,000 طالب حققوا أحلامهم معنا. نقدم لك أفضل المحتوى
              التعليمي والاختبارات التدريبية مع نخبة من أفضل المعلمين
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-l from-purple-600 to-purple-500 text-white font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-xl  hover:from-purple-700 hover:to-purple-600 hover:scale-105 transition-all duration-300">
                <FaUserPlus />
                <span>التسجيل بالموقع</span>
              </button>
              <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-xl  hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
                <FaGift />
                <span>العروض الخاصة</span>
              </button>
              <button className="bg-white/2 bg-opacity-20 border-2 border-white/40 text-white font-bold px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300 hover:bg-opacity-30">
                <FaTasks />
                <span>أنشئ خطتك</span>
              </button>
              <button className="bg-gradient-to-l from-purple-500 to-purple-400 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all duration-300 ">
                <FaBullseye />
                <span>حدد مستواك</span>
              </button>
            </div>
            <div className="mt-20 flex justify-around items-center text-center divv relative">
              {statsData.map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl font-bold text-yellow-300">
                    {stat.number}
                  </p>
                  <p className="text-white/80 mt-2">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Side: Feature Cards (Glassmorphism effect) */}
          <div className="w-full lg:w-5/12 grid grid-cols-1 gap-5">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-10 py-7 flex items-center gap-5 hover:border-white/40 transition-all hover:scale-105 duration-300  justify-between"
              >
                <div>
                  <h3 className="font-bold text-2xl">{card.title}</h3>
                  <p className="text-white/80 mt-2 font-semibold">
                    {card.subtitle}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-lg text-white shadow-lg ">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
