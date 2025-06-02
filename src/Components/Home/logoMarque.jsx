/* eslint-disable no-unused-vars */
import React from "react";
import "./app.css";
import { motion } from "framer-motion";
import { logos } from "./dummy";
const LogoMarquee = () => {
  // Duplicate the array to create seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-marquee-container  overflow-hidden py-3 ">
      <div className="logo-marquee-wrapper  flex items-center">
        <div className="logo-marquee flex items-center bg-black">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="logo-item mx-8 flex-shrink-0 "
              style={{ width: "239px" }}
            >
              <img
                src={logo}
                alt="Client logo"
                className="max-h-50 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//=========================================================

import { useRef, useEffect } from "react";
import { reviews } from "./dummy";

const ClientReviewsTicker = () => {
  // Duplicate reviews for seamless looping
  const duplicatedReviews = [...reviews, ...reviews];
  const tickerRef1 = useRef(null);
  const tickerRef2 = useRef(null);

  useEffect(() => {
    // Animation for the first ticker (right to left)
    const ticker1 = tickerRef1.current;
    const ticker2 = tickerRef2.current;

    if (ticker1 && ticker2) {
      const duration = 90000; // 40 seconds for full loop
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;

        ticker1.style.transform = `translateX(${-progress * 100}%)`;
        ticker2.style.transform = `translateX(${progress * 100}%)`;

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our <span className="text-blue-500">Clients Say</span>
        </motion.h2>

        {/* First Ticker Row (Right to Left) */}
        <div className="relative h-72 mb-8 overflow-hidden">
          <div
            ref={tickerRef1}
            className="absolute top-0 left-0 flex space-x-8 w-max"
            style={{ willChange: "transform" }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>

        {/* Second Ticker Row (Left to Right) */}
        <div className="relative h-72 overflow-hidden">
          <div
            ref={tickerRef2}
            className="absolute top-0 right-0 flex space-x-8 w-max"
            style={{ willChange: "transform" }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard
                key={`${review.id}-${index}-reverse`}
                review={review}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      className="w-80 flex-shrink-0 bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? "text-yellow-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">"{review.comment}"</p>
      <div className="flex items-center">
        <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="text-white font-medium">{review.name}</h4>
          <p className="text-blue-400 text-sm">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export { LogoMarquee, ClientReviewsTicker };
