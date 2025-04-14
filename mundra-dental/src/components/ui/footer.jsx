import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const location = useLocation();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Adjust this value based on your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-background py-3 border-t border-border px-3"
    >
      <div className="container px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Dr Mundra's Dental Clinic, Amritsar"
                className="h-24 md:h-[10vh] md:w-[30vw] w-[80vw] pt-2 -ml-4"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transform your social media presence with data-driven strategies and creative excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#homeabout" : "/#homeabout"}
                  scroll={scrollWithOffset}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#homeservices" : "/#homeservices"}
                  scroll={scrollWithOffset}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#homechoose" : "/#homechoose"}
                  scroll={scrollWithOffset}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Why Us
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to={location.pathname === "/" ? "#homecontact" : "/#homecontact"}
                  scroll={scrollWithOffset}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/orthodontics"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  to="/services/root-canal-treatment"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link
                  to="/services/dental-implants"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  to="/services/teeth-whitening"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Teeth Whitening
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/mundradentalclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://g.co/kgs/PvWbPmb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaGoogle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mundradental/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p className="font-semibold pb-2">&copy; {new Date().getFullYear()} Dr. Mundra's Dental Clinic. All rights reserved.</p>
          <p>
            Website made and maintained by{" "}
            <a
              href="https://heshmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-blue-700 cursor-pointer"
            >
              HeshMedia
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
