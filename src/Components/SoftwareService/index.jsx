import React, { useState } from "react";
import { motion } from "framer-motion";

const SoftwareServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How soon will I see results?",
      answer:
        "Some strategies (like paid ads) show results quickly, while SEO and content marketing take longer but offer lasting impact.",
    },
    {
      question: "Which platforms do you run ads on?",
      answer:
        "We run ads on platforms like Google Ads, Facebook, Instagram, LinkedIn, and more, depending on your target audience.",
    },
    {
      question: "Do you provide reports?",
      answer:
        "Yes, we provide detailed monthly reports on performance, including metrics like traffic, conversions, and ROI.",
    },
    {
      question: "Can I choose only one service (like just SEO)?",
      answer:
        "Absolutely! We tailor our services to your needs, whether you want a single service or a full package.",
    },
    {
      question: "Do you handle the creative side of campaigns too?",
      answer:
        "Yes, we manage everything from ad creatives to content creation, ensuring a cohesive campaign.",
    },
    {
      question: "How do you decide which strategy is right for my business?",
      answer:
        "We analyze your goals, industry, and audience to craft a strategy that maximizes your ROI.",
    },
  ];

  const expertiseItems = [
    {
      title: "Web Applications",
      description:
        "Scalable, secure, and fast — built with modern frameworks and APIs.",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions with native performance.",
    },
    {
      title: "E-commerce Platforms",
      description: "Custom online stores with seamless payment integration.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Secure and reliable cloud infrastructure for your business.",
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn and adapt to your needs.",
    },
    {
      title: "Data Analytics",
      description: "Turn your data into actionable business insights.",
    },
  ];

  return (
    <div className="relative min-h-screen text-white bg-black bg-fade overflow-hidden mt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-10 ">
        <video
          // className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
          className="w-full h-[79vh] object-cover blur-md"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://framerusercontent.com/assets/4rHamffNviUDdq8yNU3YbMrMsS4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="inset-0 bg-black/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-start px-4 sm:px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="w-full max-w-4xl text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="font-dm-sans text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                Tailored Software,
                <br />
                Real Results
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                We design and develop powerful software solutions that drive
                business growth and digital transformation.
              </motion.p>

              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 rounded-xl text-white font-medium text-lg shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* ======================================== */}

        {/* Expertise Section */}
        <div className="ExpertiseSection relative flex flex-col lg:flex-row justify-center items-center lg:items-start py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 gap-8 lg:gap-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

          <div className="imag w-full lg:w-auto flex justify-center lg:block relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://framerusercontent.com/images/McOSOKj6Xz4V4LWGd3UIxqqeOps.jpg?scale-down-to=512"
              className="h-full w-full max-w-md lg:max-w-none lg:w-[400px] xl:w-[500px] rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500 shadow-xl shadow-blue-500/10"
              alt="Expertise"
            />
          </div>

          <div className="OurExpertise max-w-xl w-full relative z-10">
            <button className="OurExpertiseBtn text-white text-xs sm:text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-pink-500/30 border border-white/10 backdrop-blur-sm mb-6 hover:from-blue-500/40 hover:to-pink-500/40 transition-all duration-300 shadow-lg shadow-blue-500/10">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Our Expertise
              </span>
            </button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What We <span className="text-blue-400">Build</span>
            </h1>

            <div className="space-y-6">
              {expertiseItems.map((item, idx) => (
                <div
                  key={idx}
                  className="text-left p-5 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                        <span className="text-blue-400 text-lg">{idx + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 flex items-center">
                        {item.title}
                        <svg
                          className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base mt-2 group-hover:text-gray-100 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================== */}

        {/* FAQ Section */}
        <div className="faqContainer flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 bg-black px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-12 sm:py-16 md:py-20">
          <div className="LeftSection w-full lg:w-1/3">
            <button className="px-3 py-1 text-xs sm:text-sm text-gray-300 uppercase rounded-full mb-4 bg-gray-800">
              • FAQ
            </button>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-left">
              Frequently <br />{" "}
              <span className="text-blue-300">Asked Questions</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-left mt-3 sm:mt-4">
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </p>
          </div>

          <div className="rightSection w-full lg:w-2/3 space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border border-gray-800 rounded-xl shadow-sm transition-all ${
                    isOpen ? "h-auto" : "h-16 sm:h-20 overflow-hidden"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left focus:outline-none group"
                  >
                    <span className="AskQuestionHeading text-base sm:text-lg font-semibold text-white teal-300 transition">
                      {faq.question}
                    </span>
                    <span
                      className={`AskQuestionBtn text-xl sm:text-2xl transform transition-transform text-teal-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`AskQuestionPara px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[500px] pb-4 sm:pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================== */}

        {/* Call to Action Section */}
        <div className="relative h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex w-full items-center justify-center text-white overflow-hidden px-4 sm:px-6">
          {/* Video container with proper centering */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <video
              className="w-full h-full max-w-[1000px] max-h-[500px] rounded-none sm:rounded-2xl object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/7660185-uhd_2160_3840_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Content */}
          <div className="relative z-20 px-4 sm:px-6 max-w-2xl text-center w-full">
            <span className="StartMarketingBtn text-xs sm:text-sm uppercase border border-gray-1 px-3 py-1 inline-block mb-3 sm:mb-4">
              • Start Marketing Now
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              Let's Take Your <br /> Brand Digital
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 text-white">
              Whether you want more traffic, better leads, or brand awareness —
              <br className="hidden sm:block" />
              we've got the tools and team to make it happen.
            </p>
            <button className="getbtn mt-3 sm:mt-4 md:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-blue-600 transition text-sm sm:text-base">
              Get in Touch →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
