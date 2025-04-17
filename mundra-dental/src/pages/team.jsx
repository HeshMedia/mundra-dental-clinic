import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../components/navbar";
import Footer from "../components/ui/footer";
import WhatsApp from '../components/ui/whatsapp';

// Array of team members data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Keshav Mundra",
    title: "MDS - PROSTHODONTIST & IMPLANTOLOGIST",
    image: "doctor.webp",
    imageStyle: "w-full md:max-w-[350px] h-auto max-h-[500px] object-contain",
    description: "Dr. Keshav Mundra, a specialist in prosthodontics, excels in dental implants, full-mouth rehabilitation, and smile makeovers. With expertise in restorative and cosmetic dentistry, he provides personalised care focused on aesthetics and functionality. He completed his B.D.S from Genesis Institute of Dental Sciences and Research, Ferozepur under Baba Farid University of Health Sciences, Faridkot (2005-2010) and M.D.S (Dept of Prosthodontics Including Crown and Bridge And Implantology) from College of Dental Sciences, Davangere Under Rajiv Gandhi University of Health Sciences, Bangalore, Karnataka (2011-2014). He has published 'A comparative study to Evaluate the Effect of Polyethylene and Polypropylene Fibers Reinforcement on the Flexural Strength of Dentures Base Resin – An In Vitro Study' in the Global Journal For Research Analysis. His registration number is 7631-A and he has 8 years of professional experience in the field."
  },
  {
    id: 2,
    name: "Dr. Chetan Dev Singh Boparai",
    title: "MDS - ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS",
    image: "team/chetan.webp",
    imageStyle: "w-full md:max-w-[300px] h-auto max-h-[500px] object-contain",
    description: "Dr. Chetan Dev Singh Boparai is a distinguished orthodontist with an MDS in Orthodontics and Dentofacial Orthopaedics. He is a Certified Gold II Invisalign Provider and serves as the Director the Dental & Facial Aesthetics Clinic in Amritsar. In addition, he is an Associate Professor at SGRD, Amritsar, and a Consultant Orthodontist at several clinics and hospitals."
  },
];

// Navigation items
const navItems = [
  { label: "Home", href: "/#homehero" },
  { label: "About", href: "/about" },
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
  { label: "Reviews", href: "/reviews" },
  { label: "Contact Us", href: "/#homecontact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "/path-to-instagram-icon.png" },
  { label: "Google", href: "https://google.com", icon: "/path-to-google-icon.png" },
];

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar navItems={navItems} socialLinks={socialLinks} />
      
      {/* Header Section */}
      <div className= "py-12 text-center mt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#213f8e]"
        >
          Meet Our Expert Team
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-[2px] w-[300px] bg-gray-800 mx-auto mt-6"
        />
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="w-full relative bg-[#E3EBFE] flex flex-col md:flex-row items-start justify-between rounded-lg shadow-lg overflow-hidden"
            >
              {/* Text Content */}
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#213f8e] mb-2">{member.name}</h2>
                <p className="text-lg font-semibold text-gray-800 mb-6">{member.title}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="w-full md:w-2/5 flex items-end justify-center p-0 md:pb-0"
              >
                <img 
                  src={member.image}
                  alt={member.name}
                  className={member.imageStyle}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
        <WhatsApp />
      </div>
    </div>
  );
};

export default Team;
