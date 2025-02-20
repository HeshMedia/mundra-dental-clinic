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
    { label: "About", href: "#homeabout" },
    {
      label: "Services",
      href: "#homeservices",
      subItems: [
        { label: "Braces & Aligners", href: "/services/orthodontics" },
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
      description: "We offer a variety of orthodontic treatments to help you achieve a straighter smile.",
      linkUrl: "./services/orthodontics",
      iconType: "image",
      icon: "/services-icons/dental-braces.svg",
    },
    {
      title: "Root Canal Treatment",
      description: "We provide root canal treatments to save your natural teeth and prevent extractions.",
      linkUrl: "./services/root-canal-treatment",
      iconType: "image",
      icon: "/services-icons/root-canal.png",
    },
    {
      title: "Dental Implants",
      description: "We offer dental implants to replace missing teeth and restore your smile.",
      linkUrl: "./services/dental-implants",
      iconType: "image",
      icon: "/services-icons/dental-implant.svg",
    },
    {
      title: "Teeth Whitening",
      description: "We provide professional teeth whitening treatments to brighten your smile.",
      linkUrl: "./services/teeth-whitening",
      iconType: "image",
      icon: "/services-icons/tooth-whitening.png",
    },
    {
      title: "Extractions",
      description: "We perform tooth extractions to remove damaged or decayed teeth.",
      linkUrl: "./services/tooth-extractions",
      iconType: "image",
      icon: "/services-icons/tooth-extraction.png",
    },
    {
      title: "Crowns & Bridges",
      description: "We offer ceramic crowns and bridges to restore damaged or missing teeth.",
      linkUrl: "./services/crowns-and-bridges",
      iconType: "image",
      icon: "/services-icons/dental-crown.png",
    },
    {
      title: "Full & Partial Dentures",
      description: "We provide full and partial dentures to replace missing teeth and restore your smile.",
      linkUrl: "./services/full-and-partial-dentures",
      iconType: "image",
      icon: "/services-icons/dentures.png",
    },
    {
      title: "Smile Designing",
      description: "We offer smile designing treatments to enhance the appearance of your smile.",
      linkUrl: "./services/smile-designing",
      iconType: "image",
      icon: "/services-icons/smiley.png",
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


