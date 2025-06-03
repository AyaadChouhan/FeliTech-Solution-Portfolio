import React, { useState } from "react";
import "./index.css";

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
    <div className="text-white bg-black">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-[600px] flex items-center text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
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

        <div className="absolute top-0 w-full h-full bg-black/60 z-10" />

        <div
          className="mainHeading relative z-20 px-6 max-w-4xl text-left
                  ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-72"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md">
            Tailored Software,
            <br />
            Real Results
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white opacity-50 drop-shadow-sm max-w-xl">
            We design and develop powerful software solutions that drive
            business growth and digital transformation.
          </p>

          <button
            className="getbtn mt-10 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500
                       text-white font-semibold rounded-full
                       hover:from-pink-600 hover:to-blue-600 transition"
          >
            Get in Touch →
          </button>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="ExpertiseSection justify-center flex py-20 px-6">
        <div className="imag mr-10">
          <img
            src="https://framerusercontent.com/images/McOSOKj6Xz4V4LWGd3UIxqqeOps.jpg?scale-down-to=512"
            className="h-170 w-130 OurExpertiseImg"
            alt="Expertise"
          />
        </div>
        <div className="OurExpertise max-w-xl">
          <button className="OurExpertiseBtn text-white">
            • Our Expertise
          </button>
          <h1 className="text-4xl text-white mt-10">What We Build</h1>
          <div className="space-y-6 mt-6">
            {expertiseItems.map((item, idx) => (
              <div key={idx} className="text-left">
                <h3 className="textOurExpertice text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faqContainer flex flex-col justify-center md:flex-row gap-12 bg-black px-6 py-20">
        <div className="LeftSection w-full md:w-1/3">
          <button className="px-4 py-1 text-sm text-gray-300 uppercase rounded-full mb-4 border-b-pink-950 w-20 bg-gray-600">
            • FAQ
          </button>
          <h1 className="text-4xl font-extrabold text-left">
            Frequently <br />{" "}
            <span className="text-blue-300">Asked Questions</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed text-left mt-4">
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </div>

        <div className="rightSection w-full md:w-2/3 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border border-gray-800 rounded-xl shadow-sm transition-all ${
                  isOpen ? "h-auto" : "h-20 overflow-hidden"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between border-white items-center px-6 py-5 text-left focus:outline-none group"
                >
                  <span className="AskQuestionHeading text-lg font-semibold text-white text-center border-white teal-300 transition">
                    {faq.question}
                  </span>
                  <span
                    className={`AskQuestionBtn text-2xl transform transition-transform text-teal-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`AskQuestionPara px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative h-auto min-h-[500px] flex w-full items-center justify-center text-white overflow-hidden">
        {/* Video container with proper centering */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <video
            className="w-full max-w-[1000px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl object-cover"
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
        <div className="relative z-20 px-4 sm:px-6 max-w-2xl text-center">
          <span className="StartMarketingBtn text-xs sm:text-sm uppercase border-2 border-white px-4 py-1 inline-block mb-4">
            • Start Marketing Now
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Let's Take Your <br /> Brand Digital
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-white">
            Whether you want more traffic, better leads, or brand awareness —
            <br />
            we've got the tools and team to make it happen.
          </p>
          <button className="getbtn mt-4 sm:mt-10 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-blue-600 transition">
            Get in Touch →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareServices;
