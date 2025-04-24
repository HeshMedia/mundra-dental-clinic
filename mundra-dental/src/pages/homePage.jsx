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


const HomePage = () => {
  const navItems = [
    { label: "Home", href: "#homehero" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "#homeservices",
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
    { label: "Contact Us", href: "#homecontact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/mundradental/", icon: "/path-to-instagram-icon.png" },
    { label: "Google", href: "https://g.co/kgs/PvWbPmb", icon: "/path-to-google-icon.png" },
  ];

  const servicesData = [
    {
      title: "Orthodontics",
      description: "Achieve a straighter, healthier smile with expert orthodontic treatments in Amritsar.",
      linkUrl: "./services/orthodontics",
      iconType: "image",
      icon: "/services-icons/dental-braces.svg",
      alt: "Orthodontic Braces Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Root Canal Treatment",
      description: "Painless root canal therapy (RCT) in Amritsar to save natural teeth and relieve pain.",
      linkUrl: "./services/root-canal-treatment",
      iconType: "image",
      icon: "/services-icons/root-canal.png",
      alt: "Root Canal Treatment Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Dental Implants",
      description: "Restore your smile with durable dental implants, the best tooth replacement solution in Amritsar.",
      linkUrl: "./services/dental-implants",
      iconType: "image",
      icon: "/services-icons/dental-implant.svg",
      alt: "Dental Implant Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with professional teeth whitening services at our Amritsar clinic.",
      linkUrl: "./services/teeth-whitening",
      iconType: "image",
      icon: "/services-icons/tooth-whitening.png",
      alt: "Teeth Whitening Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Tooth Extractions",
      description: "Safe and comfortable tooth extractions, including wisdom teeth, in Amritsar.",
      linkUrl: "./services/tooth-extractions",
      iconType: "image",
      icon: "/services-icons/tooth-extraction.png",
      alt: "Tooth Extraction Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Crowns & Bridges",
      description: "High-quality ceramic crowns and bridges in Amritsar to restore damaged or missing teeth.",
      linkUrl: "./services/crowns-and-bridges",
      iconType: "image",
      icon: "/services-icons/dental-crown.png",
      alt: "Dental Crown Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Full & Partial Dentures",
      description: "Comfortable and natural-looking full and partial dentures available in Amritsar.",
      linkUrl: "./services/full-and-partial-dentures",
      iconType: "image",
      icon: "/services-icons/dentures.png",
      alt: "Dentures Icon - Mundra Dental Clinic Amritsar"
    },
    {
      title: "Smile Designing",
      description: "Achieve your dream smile with personalized smile designing treatments in Amritsar.",
      linkUrl: "./services/smile-designing",
      iconType: "image",
      icon: "/services-icons/smiley.png",
      alt: "Smile Designing Icon - Mundra Dental Clinic Amritsar"
    },
  ];

  const chooseData = [
    {
      title: "Experienced Dentist",
      description: "Led by Dr. Keshav Mundra, our Amritsar clinic offers friendly, caring, and expert dentistry.",
      iconType: "svg",
      Icon: FaUserMd,
      alt: "Experienced Dentist Icon"
    },
    {
      title: "Personalized Dental Care",
      description: "Receive personalized dental care focused on your comfort and specific needs in Amritsar.",
      iconType: "svg",
      Icon: FaTooth,
      alt: "Personalized Dental Care Icon"
    },
    {
      title: "Flexible Payment Options",
      description: "We provide various flexible payment options for affordable dental treatment in Amritsar.",
      iconType: "svg",
      Icon: FaMoneyBillWave,
      alt: "Flexible Payment Options Icon"
    },
    {
      title: "Emergency Dental Services",
      description: "Access 24/7 emergency dental services in Amritsar for urgent care when you need it most.",
      iconType: "svg",
      Icon: FaPhoneAlt,
      alt: "Emergency Dental Services Icon"
    },
    {
      title: "Top Patient Reviews",
      description: "Our Amritsar patients consistently rate us highly. Read their testimonials!",
      iconType: "svg",
      Icon: FaStar,
      alt: "Patient Reviews Star Icon"
    },
    {
      title: "Advanced Dental Technology",
      description: "Utilizing cutting-edge technology for the highest standard of dental care in Amritsar.",
      iconType: "svg",
      Icon: FaCogs,
      alt: "Advanced Dental Technology Icon"
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


