import React from "react";
import { FaInstagram, FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ navItems, socialLinks }) => {
  return (
    <nav className="z-10 flex items-center justify-between bg-white px-6 py-3 shadow-md-3 rounded-full mx-4 border-2 border-blue-600 xl:w-[90vw] w-[33vh]" >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src={logo} 
          alt="Mundra Dental Clinic Logo"
          className="px-[3vw] w-90 h-16"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {navItems.map((item, index) => (
          <li key={index} className="group relative">
            <a
              href={item.href}
              className="text-blue-900 hover:text-blue-600 font-extrabold"
            >
              {item.label}
            </a>
            {item.subItems && (
              <ul className="z-20 absolute left-0 hidden mt-2 bg-white shadow-lg rounded-lg group-hover:block">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                    <a href={subItem.href} className="block text-gray-700">
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="flex items-center space-x-4 px-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 text-2xl"
        >
          <FaGoogle />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;