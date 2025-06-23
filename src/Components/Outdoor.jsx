import React from "react";
import outdoor1 from "../assets/outdoor/outdoor1.jpg";
import outdoor2 from "../assets/outdoor/outdoor2.jpg";
import outdoor3 from "../assets/outdoor/outdoor3.jpg";
import outdoor4 from "../assets/outdoor/outdoor4.jpg";
import outdoor5 from "../assets/outdoor/outdoor5.jpg";
import outdoor6 from "../assets/outdoor/outdoor6.jpg";

export default function Outdoor() {
  return (
    <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Outdoor Photography Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor1}
              alt="Outdoor Scene 1"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor2}
              alt="Outdoor Scene 2"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor3}
              alt="Outdoor Scene 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor4}
              alt="Outdoor Scene 4"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor5}
              alt="Outdoor Scene 5"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={outdoor6}
              alt="Outdoor Scene 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
