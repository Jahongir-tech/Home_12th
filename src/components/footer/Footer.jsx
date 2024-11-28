import React from "react";

import LogoImage from "../../assets/svg/LogoCare.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-500 py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 px-6">
        <div className="md:w-1/3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src={LogoImage} alt="Logo image" />
            </div>
            <h3 className="text-2xl font-semibold ml-3">Saviour Care</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <p className="text-xs mt-4">©AK PVT LTD 2021. All rights reserved</p>
        </div>

        {/* Bo'limlar */}
        <div className="md:w-2/3 flex justify-around w-full">
          {/* Company bo'limi */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Find a doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Region bo'limi */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Region</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Link
                </a>
              </li>
            </ul>
          </div>

          {/* Help bo'limi */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How it works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
