import React from 'react';

const SupportHelp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-3xl w-full text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold primary-font mb-4">
          Need Help? We’re Here for You
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Whether you have a question, need assistance with an order, or just
          want to get in touch, our support team is ready to help.
        </p>
      </div>

      <div className="max-w-2xl w-full">
        <label className="block text-left font-semibold mb-2 text-gray-900">
          Enter your Bitcoin wallet address
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Example: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportHelp;
