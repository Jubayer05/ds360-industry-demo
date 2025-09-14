"use client";
import React, { useState } from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { NAVIGATION_MENU } from "../../constants";
import { DropdownItem } from "../../types";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("HOME");
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    setActiveMenu("HOME");
  };

  const handleDropdownEnter = (menuLabel: string, hasDropdown: boolean) => {
    if (hasDropdown) {
      setOpenDropdowns((prev) => ({
        ...prev,
        [menuLabel]: true,
      }));
    }
  };

  const handleDropdownLeave = (menuLabel: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [menuLabel]: false,
    }));
  };

  return (
    <header className="relative bg-gradient-to-r from-green-100 via-green-50 to-gray-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* Roof Icon */}
            <div className="absolute -top-1 left-4">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-700"></div>
            </div>

            {/* Logo Text */}
            <div className="ml-8">
              <div className="flex items-center mb-1">
                <span className="text-2xl font-bold text-green-700">DS</span>
                <span className="text-2xl font-bold text-green-700">-360</span>
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center ml-2">
                  <span className="text-gray-900 text-xs font-bold">o</span>
                </div>
              </div>
              <div className="text-xs text-green-700 font-medium">
                CENTER FOR DEVELOPMENT
              </div>
            </div>
          </div>

          {/* Navigation and Login Button */}
          <div className="flex items-center space-x-3">
            {/* Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {NAVIGATION_MENU.map((menuItem, index) => (
                <div key={index} className="relative">
                  <a
                    href={menuItem.href}
                    className={`h-[64px] flex items-center space-x-1 text-xs font-semibold uppercase tracking-wide transition-colors relative pb-2 px-1 ${
                      activeMenu === menuItem.label
                        ? "text-green-700"
                        : "text-gray-800 hover:text-green-700"
                    }`}
                    onMouseEnter={() => {
                      handleMenuHover(menuItem.label);
                      handleDropdownEnter(menuItem.label, menuItem.hasDropdown);
                    }}
                    onMouseLeave={() => {
                      // Don't reset activeMenu when leaving main menu if dropdown is open
                      if (
                        !menuItem.hasDropdown ||
                        !openDropdowns[menuItem.label]
                      ) {
                        handleMenuLeave();
                      }
                      handleDropdownLeave(menuItem.label);
                    }}
                  >
                    {menuItem.icon === "home" && <FaHome className="text-xs" />}
                    <span>{menuItem.label}</span>
                    {menuItem.hasDropdown && (
                      <FaChevronDown className="text-xs" />
                    )}

                    {/* Always present bottom line with opacity transition */}
                    <div
                      className={`absolute bottom-5 left-0 h-[2.5px] bg-green-700 transition-all duration-300 ease-in-out ${
                        activeMenu === menuItem.label
                          ? "opacity-100 w-full"
                          : "opacity-0 w-0"
                      }`}
                    ></div>
                  </a>

                  {/* Dynamic Dropdown */}
                  {menuItem.hasDropdown &&
                    openDropdowns[menuItem.label] &&
                    "dropdownItems" in menuItem &&
                    menuItem.dropdownItems && (
                      <div
                        className="absolute top-10 left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                        onMouseEnter={() => {
                          // Keep the main menu active when hovering over dropdown
                          handleMenuHover(menuItem.label);
                          handleDropdownEnter(menuItem.label, true);
                        }}
                        onMouseLeave={() => {
                          handleMenuLeave();
                          handleDropdownLeave(menuItem.label);
                        }}
                      >
                        <div className="py-1">
                          {(menuItem.dropdownItems as DropdownItem[]).map(
                            (
                              dropdownItem: DropdownItem,
                              dropdownIndex: number
                            ) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </nav>

            {/* Login Button */}
            <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-[10px] px-6 transition-colors duration-200 uppercase text-sm tracking-wide">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
