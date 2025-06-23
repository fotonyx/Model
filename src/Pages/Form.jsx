import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import Opening from '../assets/Photos/Opening.jpg'; // Adjust path as needed


// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    event: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, event, date, message } = formData;

    if (!name || !mobile || !email || !event || !date || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      mobile,
      event,
      date,
      message,
    };

    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_public_key")
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          event: "",
          date: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

 return (
  <>
    {/* Banner Image */}
    <div className="w-full">
      <img
        src={Opening}
        alt="FOTONYX Studio Banner"
        className="w-full h-[300px] object-cover"
      />
    </div>

      {/* Main About Section */}
      <section className="min-h-screen bg-white text-black px-6 py-5 flex flex-col md:flex-row gap-10 items-start justify-between">
        <motion.div
          className="md:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            variants={fadeInUp}
          >
            <span className="italic text-gray-600">We are the</span>
            <br />
            <span className="text-black">FOTONYX</span> Photography Studio
          </motion.h2>

          <motion.p className="text-base md:text-lg text-gray-700" variants={fadeInUp}>
            At <strong>FOTONYX</strong>, we don’t just take photographs—we craft visual
            legacies. Based in the heart of Bangalore, our award-winning team specializes in:
          </motion.p>

          <div className="space-y-4 pt-4">
            {[
              { label: "Photography", percent: 92 },
              { label: "Cinematography", percent: 78 },
              { label: "Film Making", percent: 86 },
            ].map(({ label, percent }) => (
              <motion.div key={label} variants={fadeInUp}>
                <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                  <span>{label}</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-full">
                  <motion.div
                    className="h-2 rounded-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <form className="md:w-1/2 w-full space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 bg-gray-100 text-black placeholder:text-gray-500 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number*"
              value={formData.mobile}
              onChange={handleChange}
              className="flex-1 bg-gray-100 text-black placeholder:text-gray-500 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 text-black placeholder:text-gray-500 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="text"
            name="event"
            placeholder="Event Name*"
            value={formData.event}
            onChange={handleChange}
            className="w-full bg-gray-100 text-black placeholder:text-gray-500 p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <div className="relative w-full">
            {!formData.date && (
              <span className="absolute left-4 top-4 text-gray-500 pointer-events-none">
                Event Date*
              </span>
            )}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full bg-gray-100 text-black p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none ${
                !formData.date ? "text-gray-500" : ""
              }`}
            />
          </div>

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-100 text-black placeholder:text-gray-500 p-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Send Mail
          </button>
        </form>
      </section>
    </>
  );
};

export default About;
