import React from "react";
import Navbar from "../components/navbar";
import HomeHero from "../components/homeHero";
import HomeAbout from "../components/homeAbout";

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

  return (
    <>
    {/* Navbar and HomeHero Components */}
    <div className="bg-[#E3EBFE] w-screen h-screen">
      <div className="pt-6 ml-10 mr-10">
        <Navbar navItems={navItems} socialLinks={socialLinks} />
      </div>
      <div className="sm:mt-3 md:mt-16">
        <HomeHero />
      </div>
    </div>
    {/* HomeAbout Component */}
    <div className="bg-white w-screen h-screen">
      <HomeAbout />
    </div>
    </>
  );
};

export default HomePage;
