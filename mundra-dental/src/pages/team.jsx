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
    description: "Dr. Keshav Mundra, a leading Prosthodontist in Amritsar, specializes in advanced dental implants, full-mouth rehabilitation, and aesthetic smile makeovers. With extensive expertise in restorative and cosmetic dentistry, he delivers personalized care focused on optimal aesthetics and function. He earned his B.D.S from Genesis Institute of Dental Sciences and Research, Ferozepur (Baba Farid University of Health Sciences, Faridkot, 2005-2010) and M.D.S (Prosthodontics, Crown & Bridge, Implantology) from College of Dental Sciences, Davangere (Rajiv Gandhi University of Health Sciences, Bangalore, 2011-2014). His research, 'A comparative study to Evaluate the Effect of Polyethylene and Polypropylene Fibers Reinforcement on the Flexural Strength of Dentures Base Resin – An In Vitro Study', was published in the Global Journal For Research Analysis. Registered under 7631-A, Dr. Mundra brings 15 years of professional experience to his Amritsar dental practice."
  },
  {
    id: 2,
    name: "Dr. Chetan Dev Singh Boparai",
    title: "MDS - ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS",
    image: "team/chetan.webp",
    imageStyle: "w-full md:max-w-[300px] h-auto max-h-[500px] object-contain",
    description: "Dr. Chetan Dev Singh Boparai is an esteemed Orthodontist in Amritsar, holding an MDS in Orthodontics and Dentofacial Orthopaedics. As a Certified Gold II Invisalign Provider, he leads the Dental & Facial Aesthetics Clinic in Amritsar. Dr. Boparai also serves as an Associate Professor at SGRD, Amritsar, and provides expert orthodontic consultation at various clinics and hospitals in the region."
  },  {
    id: 3,
    name: "Dr. Roohan Chhina",
    title: "BDS, MDS – PEDIATRIC AND PREVENTIVE DENTISTRY",
    image: "team/roohan.webp",
    imageStyle: "w-full md:max-w-[300px] h-auto max-h-[500px] object-contain",
    description: "Dr. Roohan Chhina is a distinguished Pediatric and Preventive Dentistry specialist with over 10 years of clinical experience. Certified in Conscious Sedation and Microendodontics, she specializes in Pediatric Dentistry, Preventive Dentistry, and Interceptive Orthodontics. Dr. Chhinna is a proud gold medalist for her research in primary teeth endodontics at SAAPD and maintains active memberships in prestigious organizations including ISPPD, SAAPD, and the Indian Dental Association (IDA). She is deeply committed to providing ethical, evidence-based dental care, ensuring the highest standards of treatment for her young patients."
  },  {
    id: 4,
    name: "Dr. Ramandeep Singh Bhullar",
    title: "MDS, F.I.C.S, F.I.C.D - ORAL & MAXILLOFACIAL SURGEON",
    image: "team/ramandeep.webp",
    imageStyle: "w-full h-auto mt-[50px] object-contain",
    description: "Prof. (Dr) Ramandeep Singh Bhullar is a distinguished Oral and Maxillofacial Surgeon with over two decades of expertise. He holds an MDS from Sri Ramachandra Medical College, Chennai, and is a Fellow of the International College of Surgeons (F.I.C.S) and International College of Dentists (F.I.C.D). Currently serving as Professor & Dean of Academics at Sri Guru Ram Das Institute of Dental Sciences, Amritsar, with 16 years of teaching experience. Dr. Bhullar has served as President of AOMSI Punjab Chapter and past President of the Indian Dental Association (Amritsar Branch). With 3 published books and 41 research articles, he combines clinical excellence with academic leadership to provide exceptional oral and maxillofacial surgical care."
  },
  {
    id: 5,
    name: "Dr. Amandeep Kaur",
    title: "BDS - GENERAL DENTIST",
    image: "team/amandeep.webp", 
    imageStyle: "mt-[40px] w-full md:max-w-[300px] h-auto max-h-[600px] object-contain",
    description: "Dr. Amandeep Kaur is a dedicated general dentist with a Bachelor of Dental Surgery degree. She specializes in providing comprehensive oral health care with a focus on preventive, restorative, and aesthetic dentistry to promote lifelong dental wellness. With her patient-centered approach, Dr. Kaur emphasizes early intervention and patient education to prevent dental problems before they begin. She is skilled in various general dentistry procedures including routine check-ups, fillings, extractions, and cosmetic treatments. Dr. Kaur is committed to staying updated with the latest advancements in dental techniques and technologies to provide the best possible care for her patients of all ages."
  }
  
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
                  alt={`${member.name} - ${member.title} at Mundra Dental Clinic, Amritsar`}
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
