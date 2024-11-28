import React from "react";

const Benify = ({ image, title, desc, btnText, reverse }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center bg-white rounded-lg shadow-md overflow-hidden`}
        >
          <div className="flex-1 w-full md:w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="flex-1 w-full md:w-1/2 p-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{desc}</p>
            <button className="border border-blue-500 bg-white text-blue-500 py-2 px-8 rounded-full text-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benify;
