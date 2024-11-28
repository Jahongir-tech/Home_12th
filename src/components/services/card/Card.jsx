import React from "react";

import { CARDS } from "../../../static/Cards";

const Card = () => {
  const cardItems = CARDS.map((card) => (
    <div
      key={card.id}
      className="card__item flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
    >
      <div className="card__img w-24 h-24 flex items-center justify-center mb-6">
        <img className="w-16 h-16" src={card.image} alt={card.title} />
      </div>
      <h2 className="card__title text-lg font-bold text-gray-800 mb-2">
        {card.title}
      </h2>
      <p className="card__desc text-sm text-gray-600">{card.desc}</p>
    </div>
  ));

  return (
    <div className="cards__wrapper grid grid-cols-1 md:grid-cols-3 gap-6 p-8 ">
      {cardItems}
    </div>
  );
};

export default Card;
