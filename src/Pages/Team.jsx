import React from "react";

const PricingCard = ({ price, title, features }) => (
  <div className="bg-[#111111] text-white rounded-2xl border border-gray-800 p-8 w-full max-w-sm shadow-lg">
    <h2 className="text-4xl font-bold text-lime-400">${price}</h2>
    <span className="text-gray-400 text-sm"> / Project</span>
    <h3 className="text-2xl font-semibold mt-4">{title} Package</h3>
    <p className="text-gray-400 mt-2 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
    </p>
    <ul className="space-y-2 text-sm mb-6">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2 text-lime-400">
          <span>✔</span>
          <span className="text-white">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="bg-lime-400 hover:bg-lime-300 text-black py-2 px-4 rounded-full font-medium transition duration-300">
      Choose →
    </button>
  </div>
);

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "250",
      features: [
        "Project Consultation",
        "Free RAW Files",
        "3x Revisions",
        "Email Support",
      ],
    },
    {
      title: "Standard",
      price: "500",
      features: [
        "Project Consultation",
        "Free RAW Files",
        "5x Revisions",
        "Priority Email Support",
        "Social Media Optimization",
      ],
    },
    {
      title: "Premium",
      price: "800",
      features: [
        "Everything in Standard",
        "Unlimited Revisions",
        "Dedicated Project Manager",
        "24/7 Phone & Chat Support",
        "Full Branding Kit",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-12">See Our Pricing Package</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            price={plan.price}
            title={plan.title}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
