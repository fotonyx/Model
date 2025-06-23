import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import test1 from '../assets/Photos/test1.jpg';
import test2 from '../assets/Photos/test2.jpg';
import test3 from '../assets/Photos/test3.jpg';

const testimonials = [
  {
    image: test1,
    name: 'Brooklyn Carter',
    rating: 5,
    quote: "Working with FOTONYX was a dream! Their creative direction and professionalism made the shoot effortless. Can’t wait for our next session!",
  },
  {
    image: test2,
    name: 'James Bon',
    rating: 5,
    quote: "As a fashion model, I’ve collaborated with several studios, but FOTONYX stands out. Their lighting, precision, and vibe are unmatched.",
  },
  {
    image: test3,
    name: 'Martha Nui',
    rating: 4,
    quote: "I booked a portfolio shoot through their platform—it was seamless. The photographer captured my best angles and made me feel confident throughout.",
  },
];

const Testimonials = () => {
  return (
    <a href="https://g.co/kgs/X2yhQKF" target="_blank" rel="noopener noreferrer">
      <section className="bg-white py-20 px-4 text-center cursor-pointer">
        <p className="text-xs uppercase tracking-widest text-purple-500 mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Models & Clients Say
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-sm mb-10">
          From high-fashion shoots to professional portfolios, our clients love how we bring visions to life through our lens.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative max-w-6xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 mx-2 border border-gray-100">
                <div className="relative w-20 h-20 mx-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white shadow"
                  />
                  <span className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold border-2 border-white">
                    ✓
                  </span>
                </div>
                <div className="flex justify-center mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 mx-0.5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.285 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.285 3.957c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.957z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed px-2">{item.quote}</p>
                <h3 className="font-semibold text-gray-800 mt-6 text-sm">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
      </section>
    </a>
  );
};

export default Testimonials;
