import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaIdCard,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info - Left Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-green-500">DS</span>
                <span className="text-2xl font-bold text-white">-360</span>
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ml-2">
                  <span className="text-gray-900 text-xs font-bold">o</span>
                </div>
              </div>
              <div className="text-sm text-gray-300 font-medium">
                CENTER FOR DEVELOPMENT
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-300">+8801767804408</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-300">training@ds360.com.bd</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaIdCard className="text-gray-400" />
                <span className="text-gray-300">
                  Trade Licence No.: 03-079607
                </span>
              </div>
            </div>
          </div>

          {/* COMPANY Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              COMPANY
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* LINKS Section */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Become an Instructor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* RECOMMEND Section */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              RECOMMEND
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DS-360 Center for Development Ltd.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DS-360 International Ltd
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DS-360 Digital Lab
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sudoksho
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>Copyright © 2025, DS-360 Center for Development Ltd.</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
