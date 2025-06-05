/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./index.css";
import { Link } from "react-router-dom";
import { ClientReviewsTicker } from "../Home/logoMarque";
import { cardData } from "./mock";

function About() {
  return (
    <div className="relative min-h-screen text-white bg-black bg-fade overflow-hidden mt-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-10 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // className="w-full h-full object-cover blur"
          className="w-full h-[79vh] object-cover blur-md"
        >
          <source
            src="https://framerusercontent.com/assets/nuZoVONLPjqFkyWslhLlWTzivo.mp4"
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
                className="font-dm-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                Web Design That Makes an Impact
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                We craft stunning, user-centric websites that not only look
                great but drive results.
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
        <div className="  min-h-screen flex items-center justify-center p-4 md:p-8 ">
          <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
            {/* Left Scrollable Section - 100% width on mobile, 60% on md+ */}
            <div className="w-full md:w-[60%] pr-0 md:pr-8 overflow-y-auto max-h-[60vh] md:max-h-[80vh] custom-scrollbar">
              <div className="mb-8 md:mb-12">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/5 bg-gradient-to-b from-blue-500/10 to-gray-400/10 backdrop-blur-sm px-3 py-1.5 mb-4 md:mb-6">
                  <p className="text-white font-sans text-xs md:text-sm tracking-tight">
                    What We Offer
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-white border border-white/50"></div>
                </div>

                {/* Title */}
                <h2 className="text-white font-sans text-3xl md:text-5xl font-normal tracking-tight leading-snug md:leading-[50px] mb-6 md:mb-12">
                  <span className="inline-block">Our</span>{" "}
                  <span className="inline-block">Web</span>{" "}
                  <span className="inline-block">Design</span>{" "}
                  <span className="inline-block">Services</span>
                </h2>
              </div>

              {/* Cards Container */}
              <div className="space-y-6 md:space-y-8">
                {cardData.map((card, index) => {
                  const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.5,
                  });

                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      className="relative rounded-2xl border border-white/10 overflow-hidden"
                    >
                      <div className="absolute inset-0">
                        <img
                          src="https://framerusercontent.com/images/oElxO3ptN7lYt7oKjIH5SL6Y6M.jpg"
                          alt="Background"
                          className="w-full h-full object-cover blur border-white"
                        />
                      </div>

                      <div className="relative p-4 md:p-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-blue-500/15 shadow-[0_5px_25px_rgba(0,85,255,0.25),0_10px_10px_-1px_inset_rgba(255,255,255,0.08)] relative overflow-hidden mb-4 md:mb-6">
                          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,153,255,0.15)_0%,rgb(9,9,18)_100%)] shadow-[inset_0_10px_10px_-1px_rgba(0,85,255,0.1)]"></div>
                          <div className="relative w-full h-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              className="w-5 h-5 md:w-6 md:h-6 text-white"
                            >
                              <path d={card.iconPath}></path>
                            </svg>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-medium text-base md:text-lg leading-[22px] md:leading-[26px] tracking-tight mb-3 md:mb-4">
                            {card.title}
                          </h4>
                          <div className="h-px w-full my-3 md:my-4 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                          <p className="text-white/50 text-sm md:text-base leading-[22px] md:leading-[26px] tracking-tight mb-3 md:mb-4">
                            {card.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {card.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-xl border border-white/5 backdrop-blur-sm bg-gradient-to-b from-white/5 to-gray-100/9 text-white/60 text-xs md:text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 backdrop-blur-3xl rounded-2xl -z-10"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Image Section - 100% width on mobile, 40% on md+ */}
            <div className="w-full md:w-[40%] sticky top-4 md:top-8 h-[40vh] md:h-[80vh] flex items-center justify-center">
              <div className="relative w-full h-full max-w-xl">
                <div className="rounded-3xl border border-white/5 bg-gray-900 backdrop-blur-sm p-1 h-full flex flex-col">
                  <img
                    src="https://framerusercontent.com/images/KGUJm4qmCBfNIujUEtTLZRUd8Hw.jpg"
                    alt="Man Using Laptop"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-1"></div>
                </div>
                <div className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 bg-purple-600 rounded-full blur-3xl opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================== */}

        <ClientReviewsTicker />

        {/* ======================================== */}

        {/* CTA Section */}
        <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <div className="relative rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
            {/* Background Video */}
            <div className="absolute inset-0 -z-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover blur-lg"
                src="https://framerusercontent.com/assets/nuZoVONLPjqFkyWslhLlWTzivo.mp4"
              />
              <div className="absolute  bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 text-center">
              {/* Tagline */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-gradient-to-b from-blue-900/10 to-gray-900/10 backdrop-blur-sm">
                  <p className="text-white font-medium text-sm bg-gradient-to-r from-white to-gray-400/0 bg-clip-text">
                    Get a Free Consultation
                  </p>
                  <div className="w-2 h-2 rounded-full border border-white/50 bg-white" />
                  <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#8220EF] to-transparent" />
                </div>
              </motion.div>

              {/* Heading */}

              <motion.h2
                className="font-dm-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30 mb-6"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                Ready to Transform Your Website?
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Let's build something exceptional together.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white bg-transparent text-white font-medium hover:bg-[#613FE7] hover:border-[#613FE7] transition-all duration-300"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
