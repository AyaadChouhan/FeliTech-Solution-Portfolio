import React, { useState } from "react";
import { Link } from "react-router-dom";

const FixedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <nav className="fixed max-w-full w-full top-0 z-50 bg-black border-b border-gray-800 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <svg
                className="h-10 w-10 text-white transition-transform hover:scale-110 duration-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 8L12 12L20 8L12 4Z"
                  fill="currentColor"
                  className="text-blue-400"
                />
                <path
                  d="M4 12L12 16L20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-purple-400"
                />
                <path
                  d="M4 16L12 20L20 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-blue-300"
                />
              </svg>
              <Link to="/" onClick={handleMenuItemClick}>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FeliTech <span className="text-white">Solutions</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-6">
              <div className="relative">
                <Link
                  className="relative group flex items-center text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                >
                  <span className="relative">
                    Technology Services
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      isSolutionsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute z-20 mt-2 w-56 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transition-all duration-300 ease-in-out ${
                    isSolutionsOpen
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  <div className="py-2">
                    {[
                      {
                        label: "Software Development",
                        path: "/software-development",
                      },
                      { label: "Web Designing", path: "/web-designing" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 relative group"
                      >
                        {item.label}
                        <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { label: "Our Clients", path: "/our-clients" },
                { label: "Industries", path: "/industries" },
                { label: "About Us", path: "/about-us" },
              ].map((item) => (
                <Link
                  onClick={handleMenuItemClick}
                  key={item.label}
                  to={item.path}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute left-3 bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - CTA */}
          <div className="hidden md:flex items-center justify-end">
            <Link
              onClick={handleMenuItemClick}
              to="/contact"
              className="relative px-5 py-2 rounded-md text-sm font-medium text-white group overflow-hidden"
            >
              <span className="relative z-10" to="/contact">
                Contact Us
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 shadow-md shadow-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300"></span>
            </Link>
          </div>

          {/* Mobile menu button (right-aligned) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "scale-0" : "scale-100"
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              {/* Close Icon */}
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "scale-100" : "scale-0"
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
          isMenuOpen
            ? "scale-y-100 opacity-100 max-h-[800px]"
            : "scale-y-0 opacity-0 max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-gray-900 border-t border-gray-800 shadow-lg">
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
            >
              Technology Services
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isSolutionsOpen ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`mt-1 w-full rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                isSolutionsOpen
                  ? "opacity-100 translate-y-0 max-h-[200px]"
                  : "opacity-0 -translate-y-2 max-h-0"
              }`}
            >
              <div className="py-1 bg-gray-800 border border-gray-700 rounded-lg">
                {[
                  {
                    label: "Software Development",
                    path: "/software-development",
                  },
                  { label: "Web Designing", path: "/web-designing" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 relative group"
                    onClick={handleMenuItemClick}
                  >
                    {item.label}
                    <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other Menu Items */}
          {[
            { label: "Our Clients", path: "/service" },
            { label: "Industries", path: "/industries" },
            { label: "About Us", path: "/about-us" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 relative group"
              onClick={handleMenuItemClick}
            >
              {item.label}
              <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-[calc(100%-2rem)]"></span>
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            onClick={handleMenuItemClick}
            className="block w-full px-4 py-3 mt-2 rounded-lg text-base font-semibold text-white text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default FixedHeader;
