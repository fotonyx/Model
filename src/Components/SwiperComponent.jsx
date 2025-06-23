import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import model1 from "../assets/Photos/BA1.jpg";
import model2 from "../assets/Photos/BA2.jpg";
import model3 from "../assets/Photos/BA3.jpg";
import model4 from "../assets/Photos/BA4.jpg";

const slides = [
  {
    heading: "Your Go-To Photography Squad in Bangalore",
    description:
      "We blend artistry and emotion to capture weddings, corporate events, and portraits. Every frame tells a story—let us tell yours.",
    image: model1,
    mobileImage: model1,
  },
  {
    heading: "Bangalore’s Premier Modeling & Fashion Photography Studio",
    description:
      "We specialize in model portfolios, fashion editorials, commercial shoots, and brand campaigns. Let us capture your unique essence with striking visuals that stand out.",
    image: model2,
    mobileImage: model2,
  },
  {
    heading: "See the Art, Feel the Vision",
    description:
      "Browse our curated collections of fashion editorials, model portfolios, and commercial work that define Bangalore's creative edge.",
    image: model3,
    mobileImage: model3,
  },
  {
    heading: "Behind the Lens: FOTONYX Studio Stories",
    description:
      "Go behind the scenes of Bangalore’s most dynamic fashion shoots. Discover model interviews, lighting secrets, and how we craft iconic images for portfolios and brands.",
    image: model4,
    mobileImage: model4,
  },
];

const textParent = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const HeroSwiper = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-10">
      <div className="w-full relative h-screen overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative w-full h-screen flex items-center justify-center overflow-hidden ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <img
                  src={isMobile ? slide.mobileImage : slide.image}
                  alt={slide.heading}
                  className="absolute w-full h-full object-cover z-0"
                />

                <motion.div
                  key={index + "-text"}
                  variants={textParent}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className={`relative z-30 text-white px-6 md:px-20 max-w-3xl ${
                    index % 2 === 0 ? "" : "text-left"
                  }`}
                >
                  <motion.h1
                    variants={textChild}
                    className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg"
                  >
                    {slide.heading}
                  </motion.h1>
                  <motion.p
                    variants={textChild}
                    className="text-lg md:text-2xl mb-8 drop-shadow-md font-serif"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    variants={textChild}
                    onClick={() => navigate("/about")}
                    className="px-6 py-3 border border-white text-white rounded-full hover:bg-white/10 transition"
                  >
                    Book a Shoot
                  </motion.button>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 rotate-180 origin-left z-30 hidden md:block">
          <p className="text-white tracking-wider text-sm rotate-90">OUR WORKS</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSwiper;
