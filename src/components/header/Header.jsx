import React from "react";

import LogoImg from "../../assets/svg/LogoCare.svg";
import { LINKS } from "../../static/HeaderLinks";

const Header = () => {
  const linkItems = LINKS.map((item) => {
    return (
      <li
        key={item.id}
        className="navbar__item flex flex-wrap items-center justify-between p-3"
      >
        <a
          href={item.link}
          className="navbar__link flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-base font-medium whitespace-nowrap dark:text-white">
            {item.name}
          </span>
        </a>
      </li>
    );
  });
  return (
    <header className="header p-4 bg-slate-100 " id="header">
      <div className="container mx-auto">
        <nav className="navbar flex items-center justify-between">
          <div className="navbar__logos flex gap-6">
            <img className="logo__image h-8" src={LogoImg} alt="Logo image" />
            <h2 className="logo__title text-xl font-semibold pointer-events-auto">
              Saviour Care
            </h2>
          </div>
          <ul className="navbar__collection flex gap-12">{linkItems}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
