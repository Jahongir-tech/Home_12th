import React from 'react'

import HeroImage from "../../assets/images/HeroImage.png"

const Hero = () => {
  return (
    <section
      className="hero flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white"
      id="hero"
    >
      <div className="container mx-auto">
        <div className="hero__wrapper w-auto pt-20 flex items-center justify-between gap-20">
          <div className="hero__context flex-1 text-left md:mr-8">
            <h1 className="hero__title text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Virtual healthcare Saviour for you
            </h1>
            <p className="hero__text text-gray-600 mb-">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button className="bg-blue-500 text-white px-6 mt-20 py-3 rounded-3xl text-lg font-medium hover:bg-blue-700 transition">
              Consult today
            </button>
          </div>
          <div className="hero__image flex-1 flex items-center justify-center">
            <img
              className="max-w-full h-auto object-cover"
              src={HeroImage}
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero