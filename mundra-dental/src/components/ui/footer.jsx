import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-3 border-t border-border px-3">
      <div className="container px-4 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <a href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Dr Mundra's Dental Clinic, Amritsar"
                className="h-24 md:w-[20vw] w-[80vw] pt-2 -ml-4"
              />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Transform your social media presence with data-driven strategies and creative excellence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="services/smm"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="services/graphic-design"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Graphic Designing
                </a>
              </li>
              <li>
                <a
                  href="services/video-editing"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="services/web-development"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Web Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/15kH8JHZMZ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@heshmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/heshmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
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
    </footer>
  );
};

export default Footer;