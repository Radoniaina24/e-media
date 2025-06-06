"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

import LanguageSelect from "../Langue/LanguageSelect";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import { menuDataEn, menuDataFr } from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const { language } = useLanguageContext();
  const menuData = language === "fr" ? menuDataFr : menuDataEn;
  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center text-white ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={20}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? "bg-black" : "bg-white"} bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? "bg-black" : "bg-white"} transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? "bg-black" : "bg-white"} transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 dark:border-body-color/20 dark:bg-dark ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <>
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-lg   lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                usePathName === menuItem.path
                                  ? `${sticky ? "text-dark" : "text-dark sm:text-dark md:text-white"}`
                                  : `${sticky ? "text-dark" : "text-dark sm:text-dark md:text-white"}`
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          </>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-lg  sm:text-gray-800 ${sticky ? "text-dark" : "text-dark sm:text-dark md:text-white"}   lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 lg:invisible group-hover:opacity-100 lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full dark:bg-dark ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                    <div className="mt-6 space-y-2 lg:hidden">
                      <Link
                        href="https://enligne.e-mediauniversity.io/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded bg-primary px-4 py-2 text-center text-sm font-medium text-white shadow hover:bg-opacity-90"
                      >
                        {language === "fr" ? "S'inscrire" : "Sign up"}
                      </Link>
                      <Link
                        href="https://enligne.e-mediauniversity.io/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded bg-green-600 px-4 py-2 text-center text-sm font-medium text-white shadow hover:bg-opacity-90"
                      >
                        {language === "fr" ? "Se connecter" : "Sign in"}
                      </Link>
                    </div>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end gap-2 pr-16 lg:pr-0">
                <a
                  href=" https://enligne.e-mediauniversity.io/register "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-up hidden rounded-full bg-primary px-2 py-2 text-sm font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-4 xl:px-4"
                >
                  {language === "fr" ? "S'inscrire " : "Sign up"}
                </a>
                <a
                  href="https://enligne.e-mediauniversity.io/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-up hidden rounded-full bg-green-500 px-2 py-2 text-sm font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-4 xl:px-4"
                >
                  {language === "fr" ? "Se connecter " : "Sign in"}
                </a>
                <div>
                  {/* <ThemeToggler /> */}
                  <LanguageSelect sticky={sticky} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
