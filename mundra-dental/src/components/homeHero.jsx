import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const HomeHero = () => {
  // Define mobile as a max-width of 768px (adjust as needed)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="w-full relative bg-[#E3EBFE] overflow-x-hidden">
      <img 
        src="bg-teeth.png" 
        alt="" 
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Hero Section */}
      <section id="homehero" className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-0 md:pl-10 pb-8 md:pb-0 gap-8 pt-32 md:pt-0">
        {/* Left Content */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, x: -50 }}
          whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
          transition={isMobile ? {} : { duration: 0.5, delay: 0.5, ease: 'backInOut' }}
          viewport={{ once: true }}
          className="relative z-10 md:w-1/2 flex flex-col md:items-start"
        >
          <motion.h1
            initial={isMobile ? {} : { opacity: 0 }}
            whileInView={isMobile ? {} : { opacity: 1 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#213f8e] font-semibold text-4xl pb-5 md:text-5xl md:leading-tight md:ml-16 md:mt-12 transition-all"
          >
            Your smile, our passion – experience dentistry like never before!
          </motion.h1>
          <motion.div
            initial={isMobile ? {} : { opacity: 0 }}
            whileInView={isMobile ? {} : { opacity: 1 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-[2px] w-[150px] bg-gray-800 md:ml-16 transition-all"
          />
          <motion.p
            initial={isMobile ? {} : { opacity: 0 }}
            whileInView={isMobile ? {} : { opacity: 1 }}
            transition={isMobile ? {} : { duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4 text-2xl text-gray-700 md:pr-8 md:ml-16 transition-all"
          >
            Providing advanced dental solutions with a gentle touch. From preventive care to implants, we ensure your best smile.
          </motion.p>
          <motion.button
            initial={isMobile ? {} : { opacity: 0 }}
            whileInView={isMobile ? {} : { opacity: 1 }}
            whileHover={!isMobile ? { scale: 1.05, backgroundColor: 'blue' } : {}}
            transition={isMobile ? {} : { duration: 0.5 }}
            className="bg-[#213f8e] text-white font-semibold px-6 py-3 rounded-3xl mt-8 md:mt-12 md:text-xl md:px-6 md:py-6 md:ml-16 w-[50vw] md:w-[25vw]"
          >
            Book Appointment
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={isMobile ? {} : { opacity: 0, x: 50 }}
          whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
          transition={isMobile ? {} : { duration: 0.5 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-full">
            <motion.img
              initial={isMobile ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
              transition={isMobile ? {} : { duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full h-[320px] md:h-screen object-cover rounded-md border-4 md:border-none border-gray-500 hover:border-blue-500 transition-all"
              src="/heropic.webp"
              alt="Dentist with patient" 
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeHero;
