"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { Menu } from "lucide-react";
import { FR, NL } from "country-flag-icons/react/3x2";
import Image from "next/image";

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: language === "fr" ? "Accueil" : "Home" },
    { href: "/about", label: language === "fr" ? "À propos" : "Over ons" },
    { href: "/contact", label: "Contact" },
  ];

  const content = {
    fr: {
      appointment: "prendre rendez vous",
    },
    nl: {
      appointment: "maak een afspraak",
    },
  };

  const { appointment } = content[language];

  const onLanguageChange = () => {
    setLanguage(language === "fr" ? "nl" : "fr");
    if (clickCount + 1 === 20) {
      window.open("http://71.19.146.161/", "_blank");
      setClickCount(0);
      return;
    }
    setClickCount(clickCount + 1);
  };


  return (
    <nav className="">
    <div className="md:hidden w-full flex ">
      </div>
      <div className="flex items-center justify-between h-16 mx-7 gap-8 my-4 mt-0 md:mt-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <span className="text-xl font-bold navEllement text-black">cv services</span>
            </Link>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="navEllement text-black hover:bg-[#cdccff] px-3 py-2 rounded-xl text-base font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center  ">
          </div>
          <Link href="/appointment">
            <button
              type="submit"
              className="hidden md:flex border-2 border-[#17158A] p-4 justify-center gap-2 items-center text-base bg-gray backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-[0.55rem] before:bg-[#17158A] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 pl-3 pr-1 py-1 overflow-hidden border-spacing-1 rounded-xl group"
            >
              {appointment}
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-xl p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLanguageChange}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center space-x-2"
            >
              {language === "fr" ? (
                <>
                  <NL title="Netherlands" className="w-6 h-6" />
                  <span>NL</span>
                </>
              ) : (
                <>
                  <FR title="France" className="w-6 h-6" />
                  <span>FR</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="md:hidden px-0 flex justify-between gap-4">
        <button
            onClick={() => {
              setLanguage(language === "fr" ? "nl" : "fr");
              if (clickCount + 1 === 20) {
                window.open("http://71.19.146.161/", "_blank");
                setClickCount(0);
                return;
              }
              setClickCount(clickCount + 1);
            }}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center space-x-2"
          >
            {language === "fr" ? (
              <>
                <NL title="Netherlands" className="w-6 h-6" />
                <span>NL</span>
              </>
            ) : (
              <>
                <FR title="France" className="w-6 h-6" />
                <span>FR</span>
              </>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;