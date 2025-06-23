import React from "react";
import fashion1 from "../assets/fashion/fashion1.jpg";
import fashion2 from "../assets/fashion/fashion2.jpg";
import fashion3 from "../assets/fashion/fashion3.jpg";
import fashion4 from "../assets/fashion/fashion4.jpg";
import fashion5 from "../assets/fashion/fashion5.jpg";
import fashion6 from "../assets/fashion/fashion6.jpg";

export default function Fashion() {
  return (
    <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Fashion Portfolio Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion1}
              alt="Fashion Look 1"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion2}
              alt="Fashion Look 2"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion3}
              alt="Fashion Look 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion4}
              alt="Fashion Look 4"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion5}
              alt="Fashion Look 5"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={fashion6}
              alt="Fashion Look 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
