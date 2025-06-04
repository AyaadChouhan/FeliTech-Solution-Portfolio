/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { LogoMarquee, ClientReviewsTicker } from "./logoMarque.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./dummy.jsx";
import { useState, useEffect } from "react";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [index, setIndex] = useState(0);

  const texts = [
    "Backed by Strategy",
    "Designed for Scale",
    "Built to Convert",
    "Designed for Scale",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, company, message } = formData;

    if (!name || !email || !company || !message) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden mt-0">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // className="w-full h-full object-cover blur"
          className="w-full h-screen object-cover blur-md"
        >
          <source
            // src="https://framerusercontent.com/assets/nuZoVONLPjqFkyWslhLlWTzivo.mp4"
                        src="https://framerusercontent.com/assets/PkmYQkqvhyMvIMa3NkUsdjjoo8Y.mp4"

            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <div className="inset-0 bg-black/50" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        <motion.div
          className="w-full max-w-4xl text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="pt-10 font-dm-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-snug text-white mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Website Design Agency Built for{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                High-Growth Brands
              </span>
              {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" /> */}
            </span>
            {/* Animated Rotating Text */}
            {/* <div className="mb-10 h-16 md:h-20 overflow-hidden"> */}
            <motion.span
              key={texts[index]}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray"
              initial={{
                x: 100,
                opacity: 0,
                backgroundPosition: "100% 50%",
              }}
              animate={{
                x: 0,
                opacity: 1,
                backgroundPosition: "0% 50%",
                transition: {
                  duration: 0.8,
                  ease: "circOut",
                },
              }}
              exit={{
                x: -100,
                opacity: 0,
                backgroundPosition: "-100% 50%",
                transition: { duration: 0.5 },
              }}
            >
              {texts[index]}
            </motion.span>
            {/* </div> */}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Building technology that{" "}
            <span className="text-blue-300 font-medium">accelerates</span> your
            growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl text-white font-medium text-lg shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="relative z-10">
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
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
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

      <div className="min-h-screen bg-black text-white p-6 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Text Section */}
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

        {/* Right Form Section */}
        <motion.div
          className="w-full max-w-xl p-8 rounded-2xl shadow-md bg-gradient-to-br from-zinc-900 to-black border border-gray-700 relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Faded bottom border effect */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-25" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Row 1 */}
            <div className=" p-5 flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="text-sm font-medium block mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2 text-sm placeholder-gray-400"
                />
              </div>
              <div className="w-full ">
                <label className="text-sm font-medium block mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2 text-sm placeholder-gray-400"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="p-5">
              <label className="text-sm font-medium block mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                placeholder="Ex. Miya Infotech"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2 text-sm placeholder-gray-400"
              />
            </div>

            {/* Phone number */}
            <div className="p-5">
              <label className="text-sm font-medium block mb-1">
                Phone number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Ex +91 xxxxxxxxxx"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2 text-sm placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div className="p-5">
              <label className="text-sm font-medium block mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white py-2 resize-none text-sm placeholder-gray-400"
                rows="3"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="border border-white px-6 py-2 rounded-md text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
