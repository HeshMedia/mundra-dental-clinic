import React from 'react';
import { motion } from 'framer-motion';

const HomeChoose = ({ data, image }) => {
  return (
    <div className="w-full px-6 py-12 bg-blue-50 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-blue-900 font-semibold text-3xl md:text-4xl">
            Why Choose Us
          </h1>
          <div className="h-[2px] w-32 bg-blue-900 mx-auto mt-3"></div>
        </div>

        {/* Centered Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Services - Desktop */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 order-1 lg:order-1 md:pr-8">
            {data.slice(0, 3).map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>

          {/* Center Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="my-4 md:my-8 md:mx-2 order-2 lg:order-2 relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 hidden md:flex items-center justify-center bg-white shadow-lg rounded-full p-1 border border-blue-300 overflow-hidden relative">
              {/* Main Image */}
              <img 
                src={image} 
                alt="Tooth Model" 
                className="w-full h-full object-cover rounded-full" 
              />
              
              {/* Decorative Circles */}
              <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-3 h-3 bg-blue-300 rounded-full"></div>
              <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-[1px] w-3 h-3 bg-blue-300 rounded-full"></div>
              <div className="absolute z-10 top-1/2 right-0 translate-x-[1px] -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full"></div>
              <div className="absolute z-10 top-1/2 left-0 -translate-x-[1px] -translate-y-1/2 w-3 h-3 bg-blue-300 rounded-full"></div>
            </div>
          </motion.div>

          {/* Right Services - Desktop */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 order-3 lg:order-3 md:pl-8">
            {data.slice(3).map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated ServiceCard component with scroll and hover animations using Framer Motion
const ServiceCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    className="flex items-start space-x-4 bg-white md:bg-transparent shadow-md md:shadow-none p-6 rounded-lg border border-gray-200 md:border-none hover:shadow-lg md:hover:shadow-none transition duration-300"
  >
    <div className="text-blue-600 text-3xl">
      {item.iconType === "svg" ? (
        <item.Icon />
      ) : (
        <img src={item.icon} alt={item.title} className="w-10 h-10" />
      )}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600 mt-1">{item.description}</p>
    </div>
  </motion.div>
);

export default HomeChoose;
