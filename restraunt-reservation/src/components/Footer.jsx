// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <a href="/" className="text-3xl font-serif font-bold text-white">
            1947 London
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#about" className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
            About
          </a>
          <a href="#services" className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
            Services
          </a>
          <a href="#contact" className="text-lg text-gray-400 hover:text-white transition-colors duration-300">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2025 1947 London. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
