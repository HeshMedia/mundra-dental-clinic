import React from "react";
import { motion } from "framer-motion";

const HomeMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="md:w-[80vw] w-[80vw] mx-auto">
        {/* Google Maps Embed */}
        <div className="relative md:h-[55vh] h-[40vh] shadow-lg rounded-lg overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698.8440756911384!2d74.89124823874512!3d31.615003777685953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197d5b3ea8c963%3A0x7883ef02964640e8!2sMundra%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1739208560232!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeMap;
