import React from 'react';

const Modal = ({ model, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-11/12 lg:max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">{model.name}'s Portfolio</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {model.images.map((image, index) => (
            <div key={index} className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${model.name} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm sm:text-base text-gray-600">
          {model.socialLinks.instagram && (
            <a
              href={model.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              Instagram
            </a>
          )}
          {model.socialLinks.facebook && (
            <a
              href={model.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              Facebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
