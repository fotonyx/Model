import React, { useEffect } from 'react';
import Form from './Form';

const FormModal = ({ closeModal, modelName }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-11/12 lg:max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Book a Model</h2>

        <Form modelName={modelName} />
      </div>
    </div>
  );
};

export default FormModal;
