import { Link } from "react-scroll";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineIdcard,
} from "react-icons/ai";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="absolute z-50 w-full">
      <div className="w-full fixed flex items-end justify end top-7 right-4">
        <HiMenuAlt3
          size={30}
          onClick={handleNav}
          className="block bg-white lg:hidden md:hidden"
        />
      </div>
      {nav ? (
        <div className="fixed w-full h-screen bg-gray-900/80 flex flex-col justify-center items-center z-20">
          <HiOutlineX
            size={30}
            onClick={handleNav}
            className="absolute top-7 right-4 z-[99] rounded-full bg-gray-200 show-gray-300"
          />

          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>

          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineUser size={20} />
            <span className="pl-4">About </span>
          </Link>

          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineIdcard size={20} />
            <span className="pl-4">Experience</span>
          </Link>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Portfolio</span>
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}

      <nav
        className="md:block hidden bg-white w-full drop-shadow-md fixed"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="w-full flex flex-wrap justify-between items-center mx-auto py-3 px-12">
          <a href="/" className="p-4 font-bold text-2xl text-gray-900">
            VEVE<span className="text-yellow-300">KARISA</span>
          </a>
          <div className="items-center justify-between" id="navbar-sticky">
            <ul className="bg-transparent flex p-4 font-medium text-lg space-x-8">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-yellow-300 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
