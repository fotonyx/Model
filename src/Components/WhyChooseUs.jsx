import React from "react";
import { motion } from "framer-motion";
import PhotographerImage from "../assets/Photos/photographer.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-15 px-6 md:px-12 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
     
        <motion.div className="space-y-6 lg:col-span-1" variants={fadeIn}>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-white">Why Choose Us</span>
          </h2>
          <p className="text-gray-300 mt-6">
            Trusted by top models, agencies, and brands. We believe every frame should reveal personality, power, and passion. Our signature style blends bold compositions, flawless lighting, and storytelling depth.
          </p>
          <div className="flex items-center mt-8">
            <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center mr-4">
              HQ
            </div>
            <span className="text-xl font-semibold">Bangalore’s Creative Hub</span>
          </div>
          <p className="text-gray-400 text-sm italic mt-2">
            Featuring a state-of-the-art studio with customizable sets.
          </p>
        </motion.div>

        <motion.div className="flex justify-center lg:col-span-1" variants={fadeIn}>
          <motion.img
            src={PhotographerImage}
            alt="Photographer"
            className="rounded-xl w-[390px] md:w-[500px] xl:w-[600px] shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>

     
        <motion.div className="space-y-10 lg:col-span-1" variants={fadeIn}>
          {[ 
            { number: "20+", label: "Creative Photographers" },
            { number: "50+", label: "Professional Cameras" },
            { number: "300", label: "Events Covered" },
          ].map(({ number, label }, i) => (
            <motion.div key={i} variants={fadeIn}>
              <p className="text-5xl font-bold">
                {number}
                {number.includes("+") && (
                  <span className="text-blue-500" />
                )}
              </p>
              <p className="uppercase text-sm text-gray-400 tracking-widest mt-2">
                {label}
              </p>
              <div className="w-16 h-1 bg-blue-500 mt-2" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
