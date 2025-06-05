/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "New Paradise Club",
    owner: "Mehraj",
    link: "https://newparadiseclub.in/",
    duration: "1 Month",
    explanation: "Website for tour and travel with member management system.",
    stack: "ExpressJS, MySQL, EJS",
    description:
      "A robust and dynamic platform for managing tours and members, tailored for a modern travel company.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    bg: "travel",
  },
  {
    name: "Champs Driving School",
    owner: "Tahir",
    link: "https://champsdrivingschool.com/",
    duration: "28 Days",
    explanation: "Redesigned website for a driving school based in London.",
    stack: "WordPress, Elementor",
    description:
      "Clean and professional redesign that showcases services and testimonials for a UK-based driving school.",
    video:
      "https://videos.pexels.com/video-files/856998/856998-hd_1280_720_25fps.mp4",
    bg: "car",
  },
  {
    name: "United Tuition Group",
    owner: "Mamoon",
    link: "https://unitedtuitiongroup.com/",
    duration: "10 Days",
    explanation: "Restructure of a tuition website based in UK",
    stack: "WordPress, Elementor",
    description:
      "Optimized layout and structure for a tuition service provider to improve user navigation and SEO.",
    video:
      "https://videos.pexels.com/video-files/4148482/4148482-hd_1280_720_25fps.mp4",
    bg: "education",
  },
  {
    name: "Save the Child NGO",
    owner: "Save the Child NGO",
    link: "https://savethechild.co/",
    duration: "5 Days",
    explanation:
      "A basic website for showcasing the information of an NGO based in India.",
    stack: "WordPress, Elementor",
    description:
      "Minimalist yet informative site to support transparency and showcase impact in humanitarian work.",
    video:
      "https://videos.pexels.com/video-files/3195392/3195392-hd_1280_720_30fps.mp4",
    bg: "charity",
  },
  {
    name: "Luka Polini Website",
    owner: "Luka Polini",
    link: null,
    duration: "3 Months",
    explanation:
      "User-interacted site with animation and smooth scroll handling using Intersection Observer API.",
    stack: "jQuery, HTML5, CSS3, IntersectionObserver API",
    description:
      "Visually engaging site powered by real-time animations and fluid user experience.",
    video:
      "https://videos.pexels.com/video-files/852437/852437-hd_1280_720_24fps.mp4",
    bg: "technology",
  },
  {
    name: "KBC Multiplayer App",
    owner: "Agarwal Community",
    link: null,
    duration: "2 Months",
    explanation:
      "Multiplayer Q&A app using LAN with features like fast response, timer, and scoreboard.",
    stack: "ReactJS, Socket.io, NodeJS",
    description:
      "Real-time experience multiplayer quiz game with secured LAN connection and live interaction.",
    video:
      "https://videos.pexels.com/video-files/3182769/3182769-hd_1280_720_30fps.mp4",
    bg: "gaming",
  },
  {
    name: "Dream Potential",
    owner: "Aaron Rosenmund",
    link: "https://www.linkedin.com/company/dream-potential-serves-conscious-entrepreneurs/",
    duration: "11 Months",
    explanation:
      "Modified site using Svelte, and built a Chrome extension for screen recording.",
    stack: "Svelte, JS, WebSocket.io, MediaRecorder API, Chrome Extension",
    description:
      "Innovative tools for conscious entrepreneurs including a screen recorder and interactive website.",
    video:
      "https://videos.pexels.com/video-files/4831482/4831482-hd_1280_720_25fps.mp4",
    bg: "startup",
  },
];

const OurProjects = () => {
  return (
    <div className="relative min-h-screen pt-10 bg-black text-white font-sans overflow-hidden">
      {/* Background Image with updated overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://framerusercontent.com/images/5oB3By1xJxNDuzQ3e4gPhGjwMDY.png)",
          }}
        ></div>
        {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> */}
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10
             bg-gradient-to-r from-white to-gray-500
             text-transparent bg-clip-text tracking-tight drop-shadow-lg"
        >
          Our Projects
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-md hover:shadow-violet-500/30 transition-all duration-300"
            >
              <div className="relative h-64 bg-black">
                <video
                  src={project.video}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  muted
                  loop
                  autoPlay
                />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-100 group-hover:opacity-0 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url('https://source.unsplash.com/800x600/?${project.bg}&sig=${idx}')`,
                  }}
                ></div>
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-300">Owner: {project.owner}</p>
                <p className="text-sm text-gray-300">
                  Duration: {project.duration}
                </p>
                <p className="text-sm text-gray-200">{project.explanation}</p>
                <p className="text-sm text-gray-400 italic">
                  {project.description}
                </p>
                <p className="text-sm text-blue-400">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-300"
                    >
                      Visit Project
                    </a>
                  ) : (
                    "Link not available"
                  )}
                </p>
                <p className="text-xs text-yellow-300">
                  Stack: {project.stack}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
