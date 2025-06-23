import React from "react";

import model1 from "../assets/Photos/banner1.jpg";
import model2 from "../assets/Photos/banner2.jpg";



function BannerImagesOnly() {
  return (
    <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
      {/* Diwali Offer Image */}
      <div className="rounded-2xl shadow-lg overflow-hidden">
      <img
  src={model1}
  alt="Diwali Offer Banner"
  className="w-full h-auto"
/>
      </div>

      {/* Wedding Invitation Image */}
      <div className="rounded-2xl shadow-lg overflow-hidden">
        <img
          src={model2}
          alt="Wedding Invitation Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default BannerImagesOnly;