import React from "react";
import Navbar from "../components/navbar";
import HomeHero from "../components/homeHero";
import HomeAbout from "../components/homeAbout";
import HomeServices from "../components/homeServices";
import HomeDoctor from "../components/homeDoctor";
import HomeReviews from "../components/homeReviews";
import HomeContact from "../components/homeContact";
import HomeMap from "../components/homeMap";
import Footer from "../components/ui/footer";
import WhatsApp from "../components/ui/whatsapp";
import HomeChoose from "../components/homeChoose";
import { FaUserMd, FaTooth, FaMoneyBillWave, FaPhoneAlt, FaStar, FaCogs } from "react-icons/fa";
import toothImage from "/teeth.webp";
import { Link } from 'react-router-dom';


const HomePage = () => {
  const navItems = [
    { label: "Home", href: "#homehero" },
    { label: "About", href: "#homeabout" },
    {
      label: "Services",
      href: "#homeservices",
      subItems: [
        { label: "Braces & Aligners", href: "#" },
        { label: "Dental Fillings", href: "#" },
        { label: "Dental Implants", href: "/services/implants" },
        { label: "Teeth Whitening", href: "#" },
        { label: "Extractions", href: "#" },
        { label: "Wisdom Tooth", href: "#" },
        { label: "Molar Crown", href: "#" },
        { label: "Braces and Aligners 2", href: "#" },
      ],
    },
    { label: "Team", href: "#" },
    { label: "Reviews",href: "#", },
    { label: "Contact Us", href: "#homecontact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: "/path-to-instagram-icon.png" },
    { label: "Google", href: "https://google.com", icon: "/path-to-google-icon.png" },
  ];

  const servicesData = [
    {
      title: "Orthodontics",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus",
      linkUrl: "./services/braces",
      iconType: "image",
      icon: "/services-icons/dental-braces.svg",
    },
    {
      title: "Root Canal Treatment",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metu",
      linkUrl: "./services/fillings",
      iconType: "image",
      icon: "/services-icons/dental-filling.svg",
    },
    {
      title: "Dental Implants",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper met",
      linkUrl: "./services/implants",
      iconType: "image",
      icon: "/services-icons/dental-implant.svg",
    },
    {
      title: "Teeth Whitening",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper me",
      linkUrl: "./services/whitening",
      iconType: "image",
      icon: "/services-icons/tooth-whitening.png",
    },
    {
      title: "Extractions",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper ",
      linkUrl: "./services/extractions",
      iconType: "image",
      icon: "/services-icons/tooth-extraction.png",
    },
    {
      title: "Ceramic Crowns & Bridges",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorpe",
      linkUrl: "./services/wisdom-tooth",
      iconType: "image",
      icon: "/services-icons/wisdom-tooth.png",
    },
    {
      title: "Full and Partial Dentures",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorp",
      linkUrl: "./services/molar-crown",
      iconType: "image",
      icon: "/services-icons/molar-crown.svg",
    },
    {
      title: "Smile Designing",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcor",
      linkUrl: "./services/braces-2",
      iconType: "image",
      // Icon: "/path-to-braces-2-icon.png",
    },
  ];

  const chooseData = [
    {
      title: "Experienced Doctor",
      description: "The goal of our clinic is to provide friendly, caring dentistry.",
      iconType: "svg",
      Icon: FaUserMd,
    },
    {
      title: "Personalized Care",
      description: "We offer personalized dental care with a focus on comfort.",
      iconType: "svg",
      Icon: FaTooth,
    },
    {
      title: "Flexible Payment Options",
      description: "We provide various payment options to suit your needs.",
      iconType: "svg",
      Icon: FaMoneyBillWave,
    },
    {
      title: "Emergency Services",
      description: "24/7 emergency dental services available for urgent care.",
      iconType: "svg",
      Icon: FaPhoneAlt,
    },
    {
      title: "Positive Patient Reviews",
      description: "Our patients love us! Check out their testimonials.",
      iconType: "svg",
      Icon: FaStar,
    },
    {
      title: "Latest Technology",
      description: "We use cutting-edge technology for the best dental care.",
      iconType: "svg",
      Icon: FaCogs,
    },
  ];

  return (
    <>
    {/* Navbar and HomeHero Components */}
    <div className="h-screen">
      <div className="ml-10 mr-10">
        <Navbar navItems={navItems} socialLinks={socialLinks} />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-0 overflow-hidden">
        <HomeHero />
        <HomeAbout />
        <HomeServices services={servicesData} />
        <HomeChoose data={chooseData} image={toothImage}/>
        <HomeDoctor />
        <HomeReviews />
        <HomeContact /> 
        <HomeMap />
        <Footer />
        <WhatsApp />
      </div>
    </div>

    </>
  );
};

export default HomePage;


