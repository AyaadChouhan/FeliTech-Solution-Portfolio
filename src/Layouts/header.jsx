import React, { useState } from "react";

const FixedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <nav className="fixed max-w-full w-full top-0 z-50 bg-black border-b shadow-lg ">
      {/* className="bg-gradient-to-b from-black to-blue-900 text-white pt-12 pb-8 px-6 font-sans" */}
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-15 items-center">
          {/* Left Section - Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* <img
                className="h-35 w-55 m-0 p-0 text-white"
                src="../../public/FeliTech_Solutions-removebg-preview.png"
                alt=""
              /> */}
              <svg
                className="h-15 w-15 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="currentColor" />
                <path
                  d="M4 12L12 16L20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 16L12 20L20 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-1 text-xl font-bold  bg-blue-400 bg-clip-text text-transparent">
                FeliTech <span className="text-white">Solution</span>
              </span>
            </div>
          </div>

          {/* Center Section - Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <div className="relative group">
                <button
                  className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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

                {/* Dropdown Menu - Improved Styling */}
                {isSolutionsOpen && (
                  <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100">
                    <div className="py-1">
                      {[
                        "Cloud Solutions",
                        "AI & ML",
                        "Data Analytics",
                        "IoT",
                        "Blockchain",
                      ].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Industries
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Right Section - CTA */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href="#contact"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button (right-aligned) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
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
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
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

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Solutions
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Industries
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-center mt-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default FixedHeader;
