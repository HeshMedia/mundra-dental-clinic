import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import WhatsApp from "./ui/whatsapp";
import Footer from "./ui/footer";
import Navbar from "../components/navbar";

const ServiceLayout = ({ 
  title, 
  description,
  contentSections,
  heroImage,

}) => {
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("homecontact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate first then scroll
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById("homecontact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Delay ensures the page loads first
    }
  };

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
    <div className="container mx-auto mt-10 px-4 py-4 bg-white">
      <Navbar navItems={navItems} socialLinks={socialLinks} />
      {/* Hero Section */}
      <section className="bg-[#E3EBFE] p-4 mt-32 rounded-lg shadow-md mb-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-8">{title}</h1>
        <hr className="w-48 h-1 bg-gray-700 mx-auto" />
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <p className="text-lg pt-5 text-gray-600 mb-8 max-w-4xl">{description}</p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="space-y-8">
        {contentSections.map((section, index) => (
          <section key={index} className="bg-[#E3EBFE] p-8 md:p-16 rounded-lg shadow-md mb-8">
            {heroImage && index === 0 ? (
              // Two-column layout for the first section with the image.
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">{section.title}</h2>
                  <div className="pt-10 space-y-4 text-gray-600">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 mt-16">
                  <img src={heroImage} alt={title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">{section.title}</h2>
                <div className="pt-10 space-y-4 text-gray-600">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg leading-relaxed">{paragraph}</p>
                  ))}
                </div>

                {/* Render "Book Appointment" button after the second section */}
                {index === 1 && (
                  <div className="flex justify-center">
                    <button 
                      onClick={handleScrollToContact} 
                      className="bg-[#213f8e] text-white font-semibold px-6 py-3 rounded-3xl mt-8 md:mt-12 md:text-xl md:px-6 md:py-6 w-[50vw] md:w-[25vw] hover:bg-blue-600 transition-colors duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer and WhatsApp */}
      <Footer />
      <WhatsApp />
    </div>
  );
};

ServiceLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contentSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired,
  heroImage: PropTypes.string,

};

export default ServiceLayout;
