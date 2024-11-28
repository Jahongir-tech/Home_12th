import React from "react";
import Card from "./card/Card";

const Services = () => {
  return (
    <section className="services">
      <div className="container mx-auto">
        <div className="services__wrapper bg-gray-50 py-16">
          <h2 className="services__title text-3xl font-bold text-center text-gray-800 mb-4">
            Services we Offer
          </h2>
          <p className="services__text text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          <Card />

          <div className="services__btn flex justify-center mt-8">
            <button className="btn px-6 py-2 bg-white text-blue-500 border border-solid border-blue-500 font-semibold rounded-3xl shadow-md hover:bg-blue-500 hover:text-white transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
