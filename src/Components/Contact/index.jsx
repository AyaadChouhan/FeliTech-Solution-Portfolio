/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
// import { projects } from "./dummy.jsx";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

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
    <div>
      <div className="min-h-screen bg-black text-white p-6 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8 pt-10"
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
                placeholder="Ex. FeliTech Solutions"
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

      {/* Google Map Section */}
      <div className="w-full">
        <iframe
          title="Jodhpur Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.364158220408!2d73.008957!3d26.2702176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d1059d506cf%3A0x7f9f51806e93bc42!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
