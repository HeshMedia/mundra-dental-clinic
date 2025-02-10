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


const HomePage = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    {
      label: "Services",
      href: "#",
      subItems: [
        { label: "Service 1", href: "#" },
        { label: "Service 2", href: "#" },
      ],
    },
    { label: "Team", href: "#" },
    {
      label: "Reviews",
      href: "#",
      subItems: [
        { label: "Google Reviews", href: "#" },
        { label: "Facebook Reviews", href: "#" },
      ],
    },
    { label: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: "/path-to-instagram-icon.png" },
    { label: "Google", href: "https://google.com", icon: "/path-to-google-icon.png" },
  ];

  const servicesData = [
    {
      title: "Braces & Aligners",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus",
      linkUrl: "./services/braces",
      iconType: "image",
      icon: "/services-icons/dental-braces.svg",
    },
    {
      title: "Dental Fillings",
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
      title: "Wisdom Tooth",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorpe",
      linkUrl: "./services/wisdom-tooth",
      iconType: "image",
      icon: "/services-icons/wisdom-tooth.png",
    },
    {
      title: "Molar Crown",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorp",
      linkUrl: "./services/molar-crown",
      iconType: "image",
      icon: "/services-icons/molar-crown.svg",
    },
    {
      title: "Braces & Aligners 2",
      description: "Donec nec risus arcu sed sodales rhoncus leo, ut ullamcor",
      linkUrl: "./services/braces-2",
      iconType: "image",
      // Icon: "/path-to-braces-2-icon.png",
    },
  ];

  return (
    <>
    {/* Navbar and HomeHero Components */}
    <div className="bg-[#E3EBFE] h-screen">
      <div className="ml-10 mr-10">
        <Navbar navItems={navItems} socialLinks={socialLinks} />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-0">
        <HomeHero />
        <HomeAbout />
        <HomeServices services={servicesData} />
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


