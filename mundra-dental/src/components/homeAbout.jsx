import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from "react-router-hash-link";
import homeaboutpic from "../assets/homeaboutpic.jpg";

const MotionHashLink = motion(HashLink);

const HomeAbout = () => {
  return (
    <div className="w-full relative">
      <img 
        src="bg-circle.png" 
        alt="" 
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Hero Section */}
      <section id="homeabout" className="flex flex-col md:flex-row justify-between items-center px-4 md:px-0 gap-8 md:pt-0 pt-5 relative z-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center order-2 md:order-1"
        >
          <div className="relative w-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-[40vw] h-[380px] md:h-screen object-cover rounded-md border-4 hover:border-blue-500 border-gray-500 md:border-0 transition-all"
              src={homeaboutpic}
              alt="Dr Mundra Clinic, Amritsar"
            />
          </div>
        </motion.div>
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col md:items-start md:mr-10 md:pl-10 order-1 md:order-2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#213f8e] font-semibold text-4xl pb-5 md:text-5xl md:leading-tight"
          >
            Your Trusted Partner<br /> in Oral Health
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[2px] w-[170px] bg-gray-800 md:mt-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4 text-2xl text-gray-700 md:pr-8 md:mt-5"
          >
            At Mundra Dental Clinic, we believe in delivering exceptional dental care with precision and compassion. With years of experience and the latest technology, our expert team offers a wide range of treatments.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-2 text-2xl text-gray-700 md:pr-8 md:mt-5"
          >
            Our mission is to provide pain-free, high-quality dental services in a comfortable environment, ensuring every patient leaves with a confident smile.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <MotionHashLink
              to="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-[#213f8e] text-white rounded-md text-lg font-semibold hover:bg-[#1a2f6d] transition-colors"
            >
              Learn More
            </MotionHashLink>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeAbout;
