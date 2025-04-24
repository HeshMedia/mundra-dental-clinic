import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import homeaboutpic from "../assets/homeaboutpic.jpg";
import Navbar from '../components/navbar';
import Footer from '../components/ui/footer';
import WhatsApp from '../components/ui/whatsapp';

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  const navItems = [
    { label: "Home", href: "/#homehero" },
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
    { label: "Team", href: "/team" },
    { label: "Reviews",href: "/reviews", },
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
          About Mundra Dental Clinic - Your Premier Dentist in Amritsar
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
          Mundra Dental & Implant Clinic in Amritsar is committed to delivering outstanding dental care within a welcoming and professional atmosphere. Our expert team focuses on improving patient health, aesthetics, self-confidence, and overall quality of life. We emphasize patient education, ensuring all inquiries are addressed and diverse treatment options are discussed to meet individual dental requirements at competitive prices. Our Amritsar dental clinic adheres to the strictest hygiene protocols and employs cutting-edge dental technology for a comfortable and effective treatment journey.
          </p>
          <p className="text-xl text-gray-700">
          Conveniently situated at 24-A, 100 Feet Road, East Mohan Nagar, Amritsar, our clinic provides a friendly environment designed to make each visit positive. We understand the importance of a beautiful smile for overall well-being, and our dedicated team is here to assist you in achieving and sustaining optimal oral health in Amritsar.
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
                src={'/about/about1.webp'}
                alt="Modern dental equipment at Mundra Dental Clinic, Amritsar"
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
                src={'/about/about2.webp'}
                alt="Comfortable and hygienic treatment room at Mundra Dental Clinic, Amritsar"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default About;