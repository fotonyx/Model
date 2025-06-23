import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Pages/Modal';
import FormModal from '../Pages/FormModal';
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import Sudha from '../assets/Makeup/Sudha.jpg';

import manasa1 from '../assets/models/manasa1.jpg';

import priya1 from '../assets/models/priya1.jpg';

import Nikitha1 from '../assets/models/Nikitha1.jpg';



const models = [
  {
    name: 'Sudha',
    images: [Sudha],
    location: 'Bangalore, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/makeup_artist.sudha_kannada/',
    },
  },
  {
    name: 'Manasa',
    images: [manasa1],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/maanasa.ps?igsh=NnlpNm02ZWRvcWk2',
    },
    referralCode: 'MAN456' // 
  },
  {
    name: 'Priya',
    images: [priya1],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/its_priya_shetty__8267?igsh=ZncydGdhOHlwcGFi',
    },
  },
  {
    name: 'Nikitha',
    images: [Nikitha1],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/nikithasrinivasa?igsh=bHp1em9zaHg4Nzdl',
    },
  },
];

const Makeup = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [modelToBook, setModelToBook] = useState(null);

  return (
    <div className='py-10  bg-white' >
    <section className="bg-white py-0 px-4 md:px-6 lg:px-8 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Behind the Lens: Secrets of a Pro Fashion Photographer.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto">
            Meet Your Makeup Artist

With a deep passion for beauty and creativity, I specialize in crafting customized makeup looks that enhance your natural features and match your personality. Whether it's a wedding, a professional shoot, or a personal event, my goal is to make you look and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl overflow-hidden relative  cursor-pointer"
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full"
              >
                {model.images.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="aspect-[3/4] w-full">
                      <img
                        src={image}
                        alt={`${model.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="text-sm text-gray-600">{model.location}</p>

                <div className="mt-4 flex flex-row gap-2">
                  <a
                    href={model.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 text-sm py-2 px-3 bg-black text-white rounded-md "
                  >
                    <FaInstagram />
                    View Profile
                  </a>

                  <button
                    onClick={() => {
                      setModelToBook(model);
                      setShowFormModal(true);
                    }}
                    className="flex-1 text-sm py-2 px-3 bg-black text-white rounded-md hover:bg-gray-900 transition"
                  >
                    Book Artist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:justify-center">
          <Link
            to="/hiremodels"
            className="px-6 py-2 sm:py-3 text-sm sm:text-base text-gray-800 border border-gray-400 rounded-md hover:bg-gray-100 transition"
          >
            View More Artists
          </Link>
        </div>
      </div>

      {selectedModel && (
        <Modal model={selectedModel} closeModal={() => setSelectedModel(null)} />
      )}

      {showFormModal && (
        <FormModal closeModal={() => setShowFormModal(false)} modelName={modelToBook?.name} />
      )}
    </section>
    </div>
  );
};

export default Makeup;
