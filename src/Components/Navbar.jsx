import React, { useState } from "react";
import { FaExclamation } from "react-icons/fa6";
import {
  FaGraduationCap,
  FaUser,
  FaStar,
  FaRegNewspaper, 
  FaBook,
  FaFlask,
  FaPencilAlt,
  FaDesktop,
  FaLightbulb,
  FaGift,
  FaHome, 
  FaCaretDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi"; // <-- أيقونة السلة الجديدة

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const dropdowns = {
    قدرات: [
      { name: "قدرات كمي", icon: <FaBook className="text-red-400" /> },
      { name: "قدرات لفظي", icon: <FaPencilAlt className="text-blue-400" /> },
      {
        name: "باقة القدرات الشاملة (تأسيس وتدريب)",
        icon: <FaGift className="text-orange-400" />,
      },
    ],
    تحصيلي: [
      { name: "تحصيلي رياضيات", icon: <FaBook className="text-blue-500" /> },
      {
        name: "تحصيلي فيزياء",
        icon: <FaLightbulb className="text-purple-500" />,
      },
      { name: "تحصيلي كيمياء", icon: <FaFlask className="text-green-500" /> },
      { name: "تحصيلي أحياء", icon: <FaPencilAlt className="text-red-500" /> },
      {
        name: "باقة التحصيلي الشاملة (تأسيس وتدريب)",
        icon: <FaGift className="text-orange-400" />,
      },
    ],
    "البرامج التقنية": [
      { name: "مهارات تقنية", icon: <FaDesktop className="text-teal-500" /> },
      {
        name: "مهارات المستقبل",
        icon: <FaLightbulb className="text-yellow-500" />,
      },
    ],
  };

  const navLinks = [
    {
      name: "الرئيسية",
      active: true,
      icon: <FaHome className="text-blue-500" />,
    },
    { name: "خطتي", icon: <FaBook className="text-green-500" /> },
    { name: "قدرات", dropdown: dropdowns["قدرات"] },
    { name: "تحصيلي", dropdown: dropdowns["تحصيلي"] },
    { name: "البرامج التقنية", dropdown: dropdowns["البرامج التقنية"] },
    { name: "دورات مُميزة", icon: <FaStar className="text-yellow-400" /> },
    {
      name: "من نحن",
      icon: <FaExclamation className="text-blue-400 font-bold" />,
    },
    { name: "المقالات", icon: <FaRegNewspaper className="text-purple-500" /> },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 p-3 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Right Side: Logo */}
          <div className="flex items-center">
            <FaGraduationCap size={40} className="text-gray-700 ml-4" />
            <div className="text-right">
              <div className="text-primary text-2xl font-extrabold ml-3">المئة</div>
              <div className="text-xs text-gray-500">التعليمية</div>
            </div>
          </div>

      
          {/* Center: Desktop Navigation) */}
          <ul className="hidden lg:flex items-center space-x-2 font-semibold text-sm text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href="#"
                  className={`flex items-center px-4 py-2 rounded-md transition-colors text-center ${
                    link.active
                      ? " bg-primary text-white font-bold "
                      : "hover:bg-gray-100"
                  }`}
                >
                  {link.icon && <span className="ml-1.5">{link.icon}</span>}
                  <span>{link.name}</span>
                  {link.dropdown && <FaCaretDown className="mr-1.5" />}
                </a>

                {/* Desktop Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible transform group-hover:translate-y-0 translate-y-2">
                    <ul className="py-2">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <a
                            href="#"
                            className="flex items-center px-4 py-3 text-right text-gray-800 hover:bg-indigo-50 transition-colors"
                          >
                            <span className="ml-3">{item.icon}</span>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Left Side: Desktop Login & Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <FiShoppingCart size={26} /> {/* أيقونة السلة الجديدة */}
            </a>
            <button className="bg-primary text-white font-semibold flex items-center px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105">
              <FaUser className="ml-2" size={14} />
              <span className="text-sm">تسجيل دخول</span>
            </button>
          </div>

          {/* Mobile Burger Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="ml-4">
              <FaBars size={26} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>


      <div
        className={`fixed inset-0 bg-white z-[999] p-6 transition-transform duration-300 ease-in-out
                   flex flex-col
                   ${
                     isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
                   }`}
        style={{ left: isMobileMenuOpen ? 0 : "-100%" }}
      >
        {/* Mobile Menu Header (ثابت) */}
        <div className="flex justify-between items-center mb-6 flex-shrink-0">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes size={26} className="text-gray-700" />
          </button>
          <div className="flex items-center">
            <FaGraduationCap size={40} className="text-gray-700 ml-4" />
            <div className="text-right">
              <div className="text-primary text-2xl font-extrabold">المئة</div>
              <div className="text-xs text-gray-500">التعليمية</div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links (قابل للـ Scroll) */}
        <div className="flex-grow overflow-y-auto">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100">
                <div
                  className="flex justify-between items-center w-full py-4 text-lg"
                  onClick={() =>
                    link.dropdown &&
                    setOpenMobileDropdown(
                      openMobileDropdown === link.name ? null : link.name
                    )
                  }
                >
                  <div className="flex items-center">
                    {link.icon && <span className="ml-3">{link.icon}</span>}
                    <span
                      className={link.active ? "font-bold text-primary" : ""}
                    >
                      {link.name}
                    </span>
                  </div>
                  {link.dropdown && (
                    <FaCaretDown
                      className={`transition-transform ${
                        openMobileDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {/* Mobile Submenu (Accordion) */}
                {link.dropdown && openMobileDropdown === link.name && (
                  <ul className="pr-8 pb-2">
                    {link.dropdown.map((item) => (
                      <li key={item.name} className="py-2">
                        <a href="#" className="flex items-center text-gray-700">
                          {item.icon && (
                            <span className="ml-3">{item.icon}</span>
                          )}
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            {/* Login Button in Mobile Menu Scroll) */}
            <li className="mt-6">
              <button className="w-full bg-primary text-white font-semibold flex items-center justify-center px-6 py-4 rounded-lg text-lg">
                <FaUser className="ml-2" size={16} />
                <span>تسجيل دخول</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
