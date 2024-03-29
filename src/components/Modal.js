import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, subscriptionName }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleGoToHomePage = () => {
    window.location.href = '/';
  };

  if (!isOpen) return null;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md shadow-xl relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none bg-gray-300 hover:bg-red-500 hover:text-white rounded-3xl p-1">
          <AiOutlineClose className="h-6 w-6" />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Subscription Successful!</h2>
        <p className="text-gray-800 mb-6 text-lg">Thank you for subscribing to our plan. You are now a member of our {capitalizeFirstLetter(subscriptionName.toLowerCase())} subscription.</p>
        <div className="flex justify-center">
          <button onClick={handleGoToHomePage} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring focus:ring-blue-200">
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
