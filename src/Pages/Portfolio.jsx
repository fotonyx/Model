import React, { useState } from "react";
import { Link } from "react-router-dom";

import weddingImg from "../assets/Photos/wedding.jpg";
import fashionImg from "../assets/Photos/fashion.jpg";
import productImg from "../assets/Photos/product.jpg";
import familyImg from "../assets/Photos/family.jpg";
import outdoorImg from "../assets/Photos/outdoor.jpg";
import corporateImg from "../assets/Photos/corporate.jpg";

import Footer from "../Components/Footer";
import MasonryGridGallery from "../Components/Weddings";
// import MasonryGridGallery from "../Components/Fashion";
// import MasonryGridGallery from "../Components/Products";
// import MasonryGridGallery from "../Components/Family";
// import MasonryGridGallery from "../Components/Outdoor";
// import MasonryGridGallery from "../Components/Weddings";
// import MasonryGridGallery from "../Components/Corporate";
import Fashion from "../Components/Fashion";
import Products from "../Components/Products";
import Family from "../Components/Family";
import Outdoor from "../Components/Outdoor";
import Corporate from "../Components/Corporate";
 // Import your wedding gallery

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const categories = [
    { category: "weddings", title: "Elegant Wedding Moments", img: weddingImg },
    { category: "fashion", title: "Fashion Editorial", img: fashionImg },
    { category: "products", title: "Product Photography", img: productImg },
    { category: "family", title: "Family Portraits", img: familyImg },
    { category: "outdoor", title: "Outdoor Adventures", img: outdoorImg },
    { category: "corporate", title: "Corporate Sessions", img: corporateImg },
  ];

  return (
    <>
      <section className="pt-[80px] lg:pt-[120px] pb-[60px] lg:pb-[90px] bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative rounded-lg overflow-hidden">
              <div
                className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center relative bg-cover bg-center"
                style={{ backgroundImage: `url(${outdoorImg})` }}
              >
                <div className="absolute inset-0 bg-opacity-60" />
                <div className="relative z-10 max-w-[510px] px-4 text-center">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3">
                    Capturing Life's Finest Moments
                  </h2>
                  <p className="text-black font-extrabold text-sm sm:text-base">
                    Discover our recent photography projects—each image tells a story.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-4">
            {["all", "weddings", "fashion", "products", "family", "outdoor", "corporate"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => handleProject(cat)}
                  className={`rounded-lg py-2 px-4 text-sm sm:text-base font-semibold transition ${
                    showCard === cat
                      ? "bg-white text-black"
                      : "text-gray-400 hover:bg-white hover:text-black"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Gallery Content */}
          {showCard === "weddings" ? (
            <MasonryGridGallery />
          ) : showCard === "fashion" ? (
            <Fashion/>
          ) : showCard === "products" ? (
            <Products/>
          ) : showCard === "family" ? (
            <Family/>
          ) : showCard === "products" ? (
            <Products/>
          ) : showCard === "outdoor" ? (
            <Outdoor/>
          ) : showCard === "corporate" ? (
            <Corporate/>
          ) : (
            <div className="flex flex-wrap -mx-4">
              {categories
                .filter(({ category }) => showCard === "all" || showCard === category)
                .map(({ category, title, img }) => (
                  <PortfolioCard
                    key={category}
                    ImageHref={img}
                    category={category}
                    title={title}
                    showCard={showCard}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;

// === PortfolioCard Component ===
const PortfolioCard = ({ showCard, category, ImageHref, title }) => {
  return (
    <div className="w-full sm:w-1/2 xl:w-1/3 px-4 mb-8">
      <div className="h-full flex flex-col">
        <div className="rounded-[10px] overflow-hidden h-[220px] sm:h-[250px] lg:h-[280px] mb-4">
          <img
            src={ImageHref}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-900 rounded-lg py-5 px-4 text-center shadow-lg flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="text-primary text-sm font-medium capitalize mb-1 block">
              {category}
            </span>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
              <Link to={`/${category}`}>{title}</Link>
            </h3>
          </div>
          <Link
            to={`/${category}`}
            className="inline-block mt-2 rounded bg-white px-6 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};
