import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const HomeChoose = ({ data, image }) => {
  // Define mobile as width 768px or less (adjust as needed)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Define variants: on mobile we simply render the final state
  const titleVariants = isMobile
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } };

  const dividerVariants = isMobile
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };

  const serviceCardVariants = isMobile
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 } };

  return (
    <div id="homechoose" className="w-full px-6 py-12 bg-blue-50 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.h2
            variants={titleVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold text-[#213f8e] pb-5"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div
            variants={dividerVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="h-[2px] w-[300px] bg-gray-800 mb-8"
          />
        </div>

        {/* Centered Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Services */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 order-1 lg:order-1 md:pr-8">
            {data.slice(0, 3).map((item, index) => (
              <ServiceCard
                key={index}
                item={item}
                index={index}
                isMobile={isMobile}
                variants={serviceCardVariants}
              />
            ))}
          </div>

          {/* Center Image with Animation */}
          <motion.div
            initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            whileInView={isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={!isMobile ? { scale: 1.03, transition: { duration: 0.3 } } : {}}
            className="my-4 md:my-8 md:mx-2 order-2 lg:order-2 relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 hidden md:flex items-center justify-center bg-white shadow-lg rounded-full p-1 border border-blue-300 overflow-hidden relative">
              {/* Main Image */}
              <img 
                src={image} 
                alt="Tooth Model" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </motion.div>

          {/* Right Services */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6 order-3 lg:order-3 md:pl-8">
            {data.slice(3).map((item, index) => (
              <ServiceCard
                key={index}
                item={item}
                index={index}
                isMobile={isMobile}
                variants={serviceCardVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ item, index, isMobile, variants }) => (
  <motion.div
    variants={variants}
    initial="initial"
    whileInView="animate"
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    whileHover={!isMobile ? { scale: 1.02, transition: { duration: 0.3 } } : {}}
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
