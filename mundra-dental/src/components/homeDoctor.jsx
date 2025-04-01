import React from 'react';
import { motion } from 'framer-motion';

const HomeDoctor = () => {
  return (
    <div id="hometeam" className="scroll-mt-40 w-[80vw] pb-12 px-4 sm:px-6 lg:px-8 mt-12 flex flex-col items-start justify-center">
      {/* Section Heading */}
       <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-semibold text-[#213f8e] pb-5"
              >
        Behind Every Great Smile <br />
        is a Great Dentist!
        </motion.h2>
       <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="h-[2px] w-[300px] bg-gray-800 mb-8"
             />

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full relative md:h-[50vh] bg-[#E3EBFE] flex flex-col md:flex-row items-start justify-between rounded-lg shadow-lg"
      >
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:p-16 p-4 flex flex-col items-start justify-center"
        >
          <h3 className="text-3xl font-semibold text-[#213f8e] mt-4 mb-4">
            Dr. Keshav Mundra
          </h3>
          <p className="text-lg font-semibold text-black mb-4">
            MDS – PROSTHODONTIST
          </p>
          <p className="text-gray-700 md:hidden">
          Dr. Keshav Mundra, is a highly experienced dental specialist with over 15 years of clinical expertise. 
          He is renowned for his precision and excellence in prosthodontics, dental implants, smile restoration, 
          and full-mouth rehabilitation. Dr. Mundra is committed to delivering exceptional patient outcomes 
          through a unique combination of restorative and cosmetic dentistry.
          With a deep understanding of dental aesthetics and functionality, he takes a personalized approach 
          to every case, ensuring that each patient receives top-quality, tailored care. 
          His expertise extends beyond clinical skills—he is known for his compassionate nature and 
          dedication to restoring smiles and confidence. 
          Whether it's a complex implant case or a smile makeover, Dr. Mundra’s meticulous attention 
          to detail and passion for dentistry make him a trusted name in the field.
          </p>
          <p className="text-gray-700 hidden md:block">
          Dr. Keshav Mundra, is a highly experienced dental specialist with over 15 years of clinical expertise. <br /> 
          He is renowned for his precision and excellence in prosthodontics, dental implants, smile restoration, <br /> 
          and full-mouth rehabilitation. Dr. Mundra is committed to delivering exceptional patient outcomes <br /> 
          through a unique combination of restorative and cosmetic dentistry.
          With a deep understanding of <br /> dental aesthetics and functionality, he takes a personalized approach  
          to every case, ensuring that each <br /> patient receives top-quality, tailored care. 
          Whether it's a complex implant case or a smile makeover, <br /> Dr. Mundra’s meticulous attention 
          to detail and passion for dentistry make him a trusted name in the field.
          </p>
        </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
            viewport={{ once: true }}>
          <img className="w-full h-full md:w-[25vw] md:h-[35vw] md:absolute bottom-0 md:right-4 px-4"
            src="doctor.webp"
            alt="Dr. Keshav Mundra"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeDoctor;
