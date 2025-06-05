/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function About() {
  const imgEl = useRef(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  useEffect(() => {
    const updateImg = () => {
      if (imgEl.current) {
        const scrollY = window.scrollY;
        imgEl.current.style.opacity = Math.max(0, 1 - scrollY / 400);
        imgEl.current.style.backgroundSize =
          window.innerWidth < 768
            ? "cover"
            : `${Math.max(100, 120 - scrollY / 20)}%`;
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(updateImg);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          ref={imgEl}
          className="fixed inset-0 w-full h-screen z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/oElxO3ptN7lYt7oKjIH5SL6Y6M.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        />

        {/* Overlay with centered content */}
        <motion.div className="absolute inset-0 z-10 flex items-center justify-center px-4 xs:px-6 sm:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="bg-black/30 border-b border-gray-50 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl w-full max-w-4xl text-left"
          >
            <motion.h2
              variants={item}
              className="text-white text-4xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            >
              Where Technology Meets Creativity
            </motion.h2>
            <motion.p
              variants={item}
              className="text-white/90 text-lg xs:text-base sm:text-lg md:text-xl leading-relaxed"
            >
              We're a passionate team of designers and developers dedicated to
              creating meaningful digital solutions. Our approach combines
              cutting-edge technology with human-centered design to deliver
              exceptional results.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section - Fixed Background */}
      <div className="relative z-0 bg-black text-white px-4 xs:px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-purple-400 text-xs xs:text-sm font-semibold uppercase mb-2 tracking-wider">
                  How it works
                </p>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                  Our Journey in Digital <br className="hidden sm:block" /> and
                  Tech Excellence
                </h2>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="FeliTech Solution Team"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/9]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
                At FeliTech Solution, we provide tailored IT solutions, digital
                marketing, and social media management to help businesses grow.
                From web development to online presence management, we enhance
                productivity and drive success.
              </p>

              {/* Features List */}
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    number: "01",
                    title: "Efficiency",
                    description:
                      "Streamlined IT solutions, digital marketing, and social media management tailored to your business needs, ensuring optimal performance with FeliTech Solution.",
                  },
                  {
                    number: "02",
                    title: "Reliability",
                    description:
                      "Excellence beyond service, offering innovative IT solutions, digital marketing strategies, and social media management that drive success.",
                  },
                  {
                    number: "03",
                    title: "Innovative",
                    description:
                      "Empowering businesses with digital growth, innovation, and creative marketing strategies.",
                  },
                  {
                    number: "04",
                    title: "Seamless Integration",
                    description:
                      "Effortlessly aligning IT solutions, digital marketing, and social media strategies with your business workflow.",
                  },
                ].map((feature) => (
                  <div key={feature.number} className="group">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-purple-400 font-medium text-base sm:text-lg flex-shrink-0">
                        {feature.number}
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-purple-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-xs xs:text-sm sm:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
