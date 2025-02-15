import React from 'react';
import { motion } from 'framer-motion';

const HomeServices = ({ services }) => {
  return (
    <div id="homeservices"className="w-full pb-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-[#213f8e] font-semibold text-4xl pb-5 md:text-5xl md:leading-tight">
          Our Services
        </h1>
        <div className="h-[2px] w-[300px] bg-gray-800 mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-lg shadow-lg hover:shadow-xl bg-white border-2 border-[#E3EBFE] hover:border-blue-500 transform transition-transform duration-300 md:hover:scale-110 hover:scale-105"
            >
              {/* Icon/Image */}
              <div className="mb-4 text-blue-600">
                {service.iconType === "svg" ? (
                  <service.Icon className="w-12 h-12" />
                ) : (
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-12 h-12 object-contain"
                  />
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <a 
                href={service.linkUrl || "#"}
                className="absolute bottom-4 right-4 inline-block text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
