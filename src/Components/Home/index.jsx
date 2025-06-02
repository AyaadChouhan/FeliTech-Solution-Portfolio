/* eslint-disable no-unused-vars */
import {LogoMarquee, ClientReviewsTicker} from "./logoMarque.jsx";
import { motion } from "framer-motion";
import { projects } from "./dummy.jsx";


function Home() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden mt-0">
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/5xABh708UVqh1ib2gNI0OJGFWY.jpg"
          alt="Background"
          className="w-full h-screen object-cover blur-md"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        <motion.div
          className="rounded-xl pt-15 md:p-0 w-full max-w-4xl text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-snug mb-4 md:mb-6 text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            Website Design Agency Built for High-Growth Brands
            <span className="text-blue-500 block md:inline">
              {" "}
              Backed by Strategy...
            </span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building technology that accelerates your growth.
          </motion.p>

          <motion.button
            className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 md:px-8 md:py-3 rounded-xl text-white font-medium text-sm md:text-base shadow-xl hover:scale-105 transform transition duration-300 flex items-center gap-2 mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch <span className="text-lg">→</span>
          </motion.button>
        </motion.div>
      </div>

      <LogoMarquee />

      <div className="max-w-full mx-auto px-4 sm:px-6 text-center mt-12 md:mt-20 mb-8 md:mb-12 z-10 relative">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Showcasing Our Website
          <span className="text-blue-500 block md:inline">
            {" "}
            Design Excellence
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-300 mt-3 md:mt-4 text-sm md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We craft visually stunning, high-converting digital experiences.
        </motion.p>
      </div>

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 mb-20 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative h-[480px] overflow-hidden rounded-2xl">
                {/* Static Image with Shine Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img
                    src={project.desktopImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
                </div>

                {/* Video with Smooth Transition */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 opacity-0 group-hover:opacity-100"
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => e.currentTarget.pause()}
                  >
                    <source src={project.mobileVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent group-hover:border-blue-500/30 transition-all duration-500" />

                {/* Title with Floating Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white text-xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ClientReviewsTicker />

      <div className="min-h-screen bg-black text-white p-6 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Text Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Let's Drive <br />
            Your <span className="text-blue-500">Growth</span> <br />
            <span className="text-blue-500">Together</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            If you have any questions or need any assistance during business
            hours please get in touch.
          </p>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-1">Call on</h3>
              <p>+91 00000 00000</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p>Jodhpur City 342001, Rajasthan, India</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p>team@felitech.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Social Network</h3>
              <a href="#" className="text-white hover:text-blue-500">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Form Section with Animation */}
        <motion.div
          className="w-full lg:w-1/2 bg-zinc-800 p-8 rounded-xl shadow-md"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-400 mb-6 text-sm">
            You can reach us anytime.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2"
            />
            <input
              type="tel"
              placeholder="+1 415 555 0132"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2"
            />
            <select className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2">
              <option className="text-black">Performance Marketing</option>
              <option className="text-black">SEO</option>
              <option className="text-black">Branding</option>
            </select>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2"
            />
            <textarea
              placeholder="Message"
              rows="3"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 py-2 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-100 text-black px-6 py-2 rounded-full font-medium hover:bg-blue-200 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
