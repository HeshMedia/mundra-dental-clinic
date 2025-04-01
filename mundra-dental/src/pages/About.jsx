import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import homeaboutpic from "../assets/homeaboutpic.jpg";
import Navbar from '../components/navbar';
import Footer from '../components/ui/footer';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  const navItems = [
    { label: "Home", href: "/#homehero" },
    { label: "About", href: "/#homeabout" },
    {
      label: "Services",
      href: "/#homeservices",
      subItems: [
        { label: "Orthodontics", href: "/services/orthodontics" },
        { label: "Root Canal Treatment", href: "/services/root-canal-treatment" },
        { label: "Dental Implants", href: "/services/dental-implants" },
        { label: "Teeth Whitening", href: "/services/teeth-whitening" },
        { label: "Extractions", href: "/services/tooth-extractions" },
        { label: "Crowns & Bridges", href: "/services/crowns-and-bridges" },
        { label: "Full and Partial Dentures", href: "/services/full-and-partial-dentures" },
        { label: "Smile Designing", href: "/services/smile-designing" },
      ],
    },
    { label: "Team", href: "/#hometeam" },
    { label: "Reviews",href: "#", },
    { label: "Contact Us", href: "/#homecontact" },
  ];
  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: "/path-to-instagram-icon.png" },
    { label: "Google", href: "https://google.com", icon: "/path-to-google-icon.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
       <Navbar navItems={navItems} socialLinks={socialLinks} />
      {/* Hero Section */}
      <section className="py-16 mt-32 px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#213f8e] text-center mb-8"
        >
          About Us
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
          ​Mundra Dental & Implant Clinic is dedicated to delivering exceptional dental care in a warm and professional environment. Our team is committed to enhancing patient health, appearance, self-confidence, and overall quality of life. We prioritize patient education, ensuring that all questions are answered and various treatment options are presented to suit individual dental needs at affordable prices. Our clinic maintains the highest standards of hygiene and utilizes the latest dental technologies to provide a comfortable and effective treatment experience.
          </p>
          <p className="text-xl text-gray-700">
          Located at 24-A, 100 Feet Road, East Mohan Nagar, Amritsar, our clinic offers a welcoming atmosphere designed to make every visit a pleasant one. We believe that a beautiful smile is important for overall well-being, and our team is here to help you achieve and maintain optimal oral health.
          </p>
        </motion.div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-2 border-gray-300"
            >
              <img
                src={'/about/about1.jpg'}
                alt="Dental Clinic Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300 border-2 border-gray-300"
            >
              <img
                src={'/about/about2.jpg'}
                alt="Dental Equipment"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About; 