import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaGoogle, FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ navItems, socialLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const scrollWithOffset = (el, yOffset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav className="z-20 fixed top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-white px-6 py-3 shadow-xl border rounded-3xl border-gray-600 w-[95%] max-w-screen-xl">
        {/* Logo Section */}
        <div className="flex items-center">
          <HashLink smooth to="/" className="mr-4">
            <img
              src="/logo.png"
              alt="Mundra Dental Clinic Logo"
              className="w-50 h-12 md:w-50 md:h-16"
            />
          </HashLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-4 lg:space-x-6 whitespace-nowrap">
            {navItems.map((item, index) => (
              <li key={index} className="group relative px-2 py-3">
                <HashLink
                  smooth
                  scroll={(el) => {
                    if (item.label === "Team") {
                      scrollWithOffset(el, -180);
                    } else if (item.label === "Reviews") {
                      scrollWithOffset(el, -150);
                    } else if (item.label === "Contact Us") {
                      scrollWithOffset(el, -5);
                    } else if (item.label === "Services") {
                      scrollWithOffset(el, -110)
                    } else {
                      scrollWithOffset(el, 0);
                    }
                  }}
                  to={item.href}
                  className="text-blue-900 hover:text-blue-600 font-bold text-sm lg:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </HashLink>
                {item.subItems && (
                  <ul className="z-20 absolute left-0 top-full hidden bg-white shadow-lg rounded-lg group-hover:block hover:block min-w-[200px] pt-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg">
                        <HashLink
                          smooth
                          to={subItem.href}
                          className="block text-gray-700 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center space-x-4 px-6">
          <a
            href="https://www.instagram.com/mundradental/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 text-xl lg:text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://g.co/kgs/PvWbPmb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 text-xl lg:text-2xl"
          >
            <FaGoogle />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="sidebar"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "tween" }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 p-6 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <HashLink smooth to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/logo.png"
                    alt="Mundra Dental Clinic Logo"
                    className="w-48 h-12"
                  />
                </HashLink>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-blue-900 text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <li key={index} className="group relative">
                    <HashLink
                      smooth
                      scroll={(el) => {
                        if (item.label === "Team") {
                          scrollWithOffset(el, -180);
                        } else if (item.label === "Reviews") {
                          scrollWithOffset(el, -150);
                        } else if (item.label === "Contact Us") {
                          scrollWithOffset(el, -180);
                        } else {
                          scrollWithOffset(el, 0);
                        }
                      }}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-blue-900 hover:text-blue-600 font-bold text-lg"
                    >
                      {item.label}
                    </HashLink>
                    {item.subItems && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <HashLink
                              smooth
                              to={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-700 hover:text-blue-600"
                            >
                              {subItem.label}
                            </HashLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-6 left-6 flex space-x-4">
                <a
                  href="https://www.instagram.com/mundradental/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://g.co/kgs/PvWbPmb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 text-2xl"
                >
                  <FaGoogle />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
