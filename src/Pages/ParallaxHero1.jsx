import React, { useState, useEffect } from "react";


// Place your image in the public folder or use an online URL
const uploadedImage = "/images/yourimage.png"; // Change path accordingly

import model1 from "../assets/Photos/slideF.jpg";
import model2 from "../assets/Photos/slideG.jpg";
import model3 from "../assets/Photos/s11.jpg";
const slides = [
  {
    image: model1,
    text: "Your image should stop hearts, not just scrolls—we craft portraits that command attention, not just approval.",
  },
  {
    image: model2,
    text: "Capture the soul, not just the smile—our photography brings stories to life.",
  },
  {
    image: model3,
    text: "Beyond the lens, beyond the ordinary—experience portraits that linger in memory.",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden", borderRadius: "12px" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(80%)",
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "White",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              padding: "0 20px",
              maxWidth: "800px",
            }}
          >
            <em>{slide.text}</em>
          </div>
        </div>
      ))}
   
      {/* Dots Navigation */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: "10px",
              height: "10px",
              background: currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
