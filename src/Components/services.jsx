import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import weddingImg from '../assets/Photos/wedding.jpg';
import fashionImg from '../assets/Photos/fashion.jpg';
import productImg from '../assets/Photos/product.jpg';
import familyImg from '../assets/Photos/family.jpg';
import outdoorImg from '../assets/Photos/outdoor.jpg';
import corporateImg from '../assets/Photos/corporate.jpg';

const WhatWeDo = () => {
  const services = [
    {
      image: weddingImg,
      title: "Wedding / Event Photography",
      category: "WEDDINGS & CELEBRATIONS",
      description:
        "Capture the magic of your special day with candid and traditional shots. Perfect for weddings, birthdays, and engagements.",
    },
    {
      image: fashionImg,
      title: "Portfolio / Fashion Photography",
      category: "FASHION & STYLE",
      description:
        "Tailored for models and influencers—create editorial-style images to build or enhance your portfolio.",
    },
    {
      image: productImg,
      title: "Product / Commercial Photography",
      category: "COMMERCIAL WORK",
      description:
        "Showcase your brand with crisp, creative, high-resolution product images that boost marketing and sales.",
    },
    {
      image: familyImg,
      title: "Baby / Family / Maternity Photography",
      category: "FAMILY MOMENTS",
      description:
        "Cherish your family's milestones with warm, intimate portraits. Ideal for newborns, maternity, and family sessions.",
    },
    {
      image: outdoorImg,
      title: "Candid / Outdoor Shoots",
      category: "NATURAL & LIFESTYLE",
      description:
        "Natural light and real emotions. Spontaneous moments captured in beautiful outdoor settings.",
    },
    {
      image: corporateImg,
      title: "Corporate / Headshots Photography",
      category: "PROFESSIONAL HEADSHOTS",
      description:
        "Clean, confident portraits for resumes, LinkedIn, or company profiles—great for individuals and teams.",
    },
  ];

  return (
    <section className="py-15 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl font-light mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Welcome to <span className="font-semibold">FOTONYX</span>
        </motion.h2>

        <motion.h1
          className="text-3xl sm:text-4xl font-serif italic mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          we don’t just take photographs—we craft visual legacies
        </motion.h1>

        <motion.p
          className="text-gray-500 max-w-2xl mx-auto text-sm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Based in the heart of Bangalore, our award-winning team specializes in capturing timeless moments that speak volumes. Whether it's a wedding, portrait, product, or corporate shoot—we bring stories to life through the lens.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg shadow-md overflow-hidden bg-gray-50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-xs text-gray-500 uppercase">{item.category}</p>
                <p className="text-sm text-gray-600 mt-2 mb-4">{item.description}</p>
                <Link
                  to="/about"
                  className="inline-block px-4 py-2  ml-24 text-sm bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
