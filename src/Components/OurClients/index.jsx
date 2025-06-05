/* eslint-disable no-unused-vars */
import React from "react";
import { LogoMarquee } from "../Home/logoMarque";
import { motion, AnimatePresence } from "framer-motion";

function OurClients() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-sans">
      {/* Background Image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/5oB3By1xJxNDuzQ3e4gPhGjwMDY.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple/20 via-blue/90 to-blue/30 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 md:py-32 lg:py-40 text-white">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Our Clients
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            From startups to established brands, our clients rely on us for
            cutting-edge technology and creative marketing strategies that move
            them forward.
          </motion.p>
        </motion.div>

        {/* Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-7xl px-4"
        >
          <LogoMarquee />
        </motion.div>

        {/* Floating elements (optional decorative elements) */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-70"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-cyan-400 opacity-70"
        />
      </div>
    </div>
  );
}

export default OurClients;
