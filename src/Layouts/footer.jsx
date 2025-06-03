import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-black to-blue-900 text-white pt-12 pb-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Contact Info */}
          <div >
            <h3 className="font-bold text-lg mb-5 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white transition flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@felitech.com
              </li>
              <li className="hover:text-white transition flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jodhpur, Rajasthan, India
              </li>
              <li className="hover:text-white transition flex items-start">
                <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9682667804
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                {name: "Services", href: "#services"},
                {name: "Our Work", href: "#work"},
                {name: "About Us", href: "#about"},
                {name: "Contact", href: "#contact"},
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Connect With Us</h3>
            <div className="flex space-x-4 mb-5">
              <a href="#" className="text-gray-300 hover:text-white transition text-lg">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition text-lg">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition text-lg">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition text-lg">
                <FaFacebookF />
              </a>
            </div>
            
            <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
            <div className="flex">
            <div className="bg-white p-1 rounded-xl">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l text-sm text-gray-800 bg-white border-none focus:outline-none"
              />
              <button className="rounded-xl  bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                Join
              </button>

            </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} FeliTech Solutions. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;