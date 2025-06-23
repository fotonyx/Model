import React from "react";
import wedding1 from "../assets/wedding/wedding1.jpg";
import wedding2 from "../assets/wedding/wedding2.jpg";
import wedding3 from "../assets/wedding/wedding3.jpg";
import wedding4 from "../assets/wedding/wedding4.jpg";
import wedding5 from "../assets/wedding/wedding5.jpg";
import wedding6 from "../assets/wedding/wedding6.jpg";

export default function MasonryGridGallery() {
  return (
    <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Wedding Photography Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding1}
              alt="Wedding Moment 1"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding2}
              alt="Wedding Moment 2"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding3}
              alt="Wedding Moment 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding4}
              alt="Wedding Moment 4"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding5}
              alt="Wedding Moment 5"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={wedding6}
              alt="Wedding Moment 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
