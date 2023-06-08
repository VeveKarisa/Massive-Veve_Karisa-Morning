import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="absolute z-50 w-full">
      <nav
        className="md:block hidden bg-white w-full drop-shadow-md fixed"
        data-aos="fade-down"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto py-3 px-12">
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
}

export default Navigation;
