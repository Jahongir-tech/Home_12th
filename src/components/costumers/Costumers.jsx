import React from 'react'

import CostumerAvatar from "../../assets/images/costumerAvatar.png";

const Costumer = () => {
  return (
    <section className="costumers flex flex-col gap-20 items-center justify-center py-12 bg-white">
      <div className="container mx-auto">
        <div className="costumers__wrapper text-white max-w-4xl h-80 mx-auto rounded-lg pt-12 shadow-lg p-8 bg-gradient-to-r from-blue-400 to-blue-500">
          <h2 className="costumers__title text-2xl font-semibold text-center mb-6 text-white">
            What our customers are saying
          </h2>
          <div className="flex__wrapper flex items-center justify-center pt-16">
            <div className="costumer__ak flex flex-row items-center justify-start w-1/2 gap-20">
              <div className="costumer__ak--img w-24 h-24 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover text-white"
                  src={CostumerAvatar}
                  alt="costumer avatar image"
                />
              </div>
              <div className="costumer__ak--info text-left">
                <h3 className="text-lg font-medium text-white">AK</h3>
                <p className="text-sm text-gray-300">Abc ltd</p>
              </div>
            </div>
            <div className="costumer__context  w-1/2">
              <p className="costumer__context--info text-white italic text-lg leading-relaxed ">
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Costumer