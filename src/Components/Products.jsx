import React from "react";
import product1 from "../assets/product/product1.jpg";
import product2 from "../assets/product/product2.jpg";
import product3 from "../assets/product/product3.jpg";
import product4 from "../assets/product/product4.jpg";
import product5 from "../assets/product/product5.jpg";
import product6 from "../assets/product/product6.jpg";

export default function Products() {
  return (
    <section className="w-full bg-white py-30 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Product Photography Gallery
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product1}
              alt="Product 1"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product2}
              alt="Product 2"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product3}
              alt="Product 3"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product4}
              alt="Product 4"
            />
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product5}
              alt="Product 5"
            />
          </div>
          <div className="grid gap-4">
            <img
              className="h-auto w-full rounded-lg object-cover object-center"
              src={product6}
              alt="Product 6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
