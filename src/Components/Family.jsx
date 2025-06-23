import React from "react";
import family1 from "../assets/family/family1.jpg";
import family2 from "../assets/family/family2.jpg";
import family3 from "../assets/family/family3.jpg";
import family4 from "../assets/family/family4.jpg";
import family5 from "../assets/family/family5.jpg";
import family6 from "../assets/family/family6.jpg";

export default function Family() {
  return (
    <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Family Moments Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family1}
              alt="Family Moment 1"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family2}
              alt="Family Moment 2"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family3}
              alt="Family Moment 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family4}
              alt="Family Moment 4"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family5}
              alt="Family Moment 5"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={family6}
              alt="Family Moment 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
