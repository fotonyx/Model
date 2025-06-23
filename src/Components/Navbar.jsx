import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import blackLogo from "../assets/Photos/black.png"; // Use black logo for white background
import wappImage from "../assets/Photos/wapp.png";

const navItems = ["Home", "Portfolio", "Hire Models", "Hire Makeup", "Blog"];

const socialLinks = [
  {
    href: "https://www.instagram.com/fotonyx_/",
    icon: <Instagram />,
    className: "hover:text-pink-500",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61575053978271",
    icon: <Facebook />,
    className: "hover:text-blue-600",
  },
  {
    href: "https://g.co/kgs/X2yhQKF",
    icon: <MapPin />,
    className: "hover:text-green-600",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black px-6 py-5 shadow-md z-20">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to="/" className="shrink-0 pr-4">
          <img
            src={blackLogo}
            alt="PhotoStudio Logo"
            className="w-32 h-12 md:w-48 object-contain transition-all duration-300"
          />
        </Link>

        <ul className="hidden md:flex gap-20 text-base font-medium mx-auto">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`hover:text-gray-600 transition-colors duration-200 ${
                  location.pathname ===
                  (item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`)
                    ? "text-gray-600"
                    : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className={`p-2 ${link.className}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="md:hidden z-50">
          <motion.button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen ? "true" : "false"}
            className="focus:outline-none"
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white text-black z-40 flex flex-col items-center justify-center space-y-8 text-lg sm:text-xl font-medium"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={closeMenu}
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.div>
            ))}

            <div className="flex gap-8 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  className={`p-2 ${link.className}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919944200250"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src={wappImage}
          alt="Chat on WhatsApp"
          className="w-14 h-14 object-contain hover:scale-105 transition-transform duration-300"
        />
      </a>
    </nav>
  );
};

export default Navbar;
