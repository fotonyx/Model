import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Pages/Modal';
import FormModal from '../Pages/FormModal';
import { FaInstagram } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import riyana1 from '../assets/models/riyana1.jpg';
import riyana3 from '../assets/models/riyana3.jpg';
import riyana5 from '../assets/models/riyana5.jpg';
import riyana6 from '../assets/models/riyana6.jpg';
import riyana7 from '../assets/models/riyana7.jpg';
import riyana8 from '../assets/models/riyana8.jpg';

import manasa1 from '../assets/models/manasa1.jpg';
import manasa2 from '../assets/models/manasa2.jpg';
import manasa3 from '../assets/models/manasa3.jpg';
import manasa4 from '../assets/models/manasa4.jpg';
import manasa5 from '../assets/models/manasa5.jpg';
import manasa6 from '../assets/models/manasa6.jpg';
import manasa7 from '../assets/models/manasa7.jpg';
import manasa8 from '../assets/models/manasa8.jpg';
import manasa9 from '../assets/models/manasa9.jpg';
import manasa10 from '../assets/models/manasa10.jpg';

import priya1 from '../assets/models/priya1.jpg';
import priya2 from '../assets/models/priya2.jpg';
import priya3 from '../assets/models/priya3.jpg';
import priya4 from '../assets/models/priya4.jpg';
import priya5 from '../assets/models/priya5.jpg';
import priya6 from '../assets/models/priya6.jpg';
import priya8 from '../assets/models/priya8.jpg';
import priya9 from '../assets/models/priya9.jpg';
import priya10 from '../assets/models/priya10.jpg';

import Nikitha1 from '../assets/models/Nikitha1.jpg';
import Nikitha2 from '../assets/models/Nikitha2.jpg';
import Nikitha3 from '../assets/models/Nikitha3.jpg';
import Nikitha4 from '../assets/models/Nikitha4.jpg';
import Nikitha5 from '../assets/models/Nikitha5.jpg';
import Nikitha6 from '../assets/models/Nikitha6.jpg';
import Nikitha7 from '../assets/models/Nikitha7.jpg';


const models = [
  
  {
    name: 'Riyana',
    images: [riyana1, riyana3, riyana5, riyana6, riyana7, riyana8],
    location: 'Chennai, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/riyanajoy/',
    },
  },
  {
    name: 'Manasa',
    images: [manasa1, manasa2, manasa3, manasa4, manasa5, manasa6, manasa7, manasa8, manasa9, manasa10],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/maanasa.ps?igsh=NnlpNm02ZWRvcWk2',
    },
  },
  {
    name: 'Priya',
    images: [priya1, priya2, priya3, priya4, priya5, priya6, priya8, priya9, priya10],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/its_priya_shetty__8267?igsh=ZncydGdhOHlwcGFi',
    },
  },
  {
    name: 'Nikitha',
    images: [Nikitha1, Nikitha2, Nikitha3, Nikitha4, Nikitha5, Nikitha6, Nikitha7],
    location: 'Bengaluru, India',
    socialLinks: {
      instagram: 'https://www.instagram.com/nikithasrinivasa?igsh=bHp1em9zaHg4Nzdl',
    },
  },
];

const ModelsSection = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [modelToBook, setModelToBook] = useState(null);

  return (
    <div className='py-10  bg-white' >
    <section className="bg-white py-0 px-4 md:px-6 lg:px-8 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Behind the Lens: Secrets of a Pro Fashion Photographer
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto">
            Step into the world of high-fashion photography and discover the craft behind the perfect shot.
            From lighting secrets to posing techniques, we capture more than just images—we tell powerful stories through every frame.
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
                    Book Model
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
            View More Models
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

export default ModelsSection;
