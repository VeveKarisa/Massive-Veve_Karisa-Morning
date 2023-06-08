import Veve from "../Album/veveveve.png";
import myCv from "../Album/CV_VEVE KARISA.pdf";
import { Link } from "react-scroll";
import React from "../Album/react.png";
import tailwind from "../Album/tailwind.png";
import Php from "../Album/php.png";
import Bs from "../Album/bootstrap.png";
import Css from "../Album/css.png";
import Html from "../Album/html.png";
import Figma from "../Album/figma.png";
import Canva from "../Album/canva.png";

function About() {
  return (
    <div id="about" className=" h-fit w-full items-center">
      <div className="flex max-w-4xl m-auto h-full w-full">
        <div className=" flex flex-col items-center gap-20">
          <h1 data-aos="zoom-in-up" className="font-bold mt-10 text-4xl">
            About Me
          </h1>
          <div
            data-aos="zoom-in-up"
            className="flex flex-col items-center gap-5 lg:gap-20 lg:flex-row "
          >
            <div>
              <img className="h-44 rounded-full" src={Veve} alt="Veve" />
            </div>
            <div className="w-[400px] rounded-lg card lg:w-[600px] bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Web Development Enthusiast👨‍💻</h2>
                <p>
                  {" "}
                  Hai! Thank you for coming to see my pages. I'm currently
                  student at Batam State Polytechnic majoring in Informatics
                  Engineering. I'm really interest about design and passionate
                  to develop various website especially in Front-end. Here i
                  attached my CV, feel free to check it out and don't forget
                  about my portfolio. See you on future collaboration peeps!
                </p>
                <div className="card-actions justify-end">
                  <a href={myCv} target="blank" download={myCv}>
                    <button className="btn bg-yellow-300">
                      Download My CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="flex flex-col-reverse items-center gap-5 lg:gap-20 lg:flex-row"
          >
            <div className="w-[400px] lg:w-[600px] rounded-lg card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Soft Skill🙆‍♀️ </h2>
                <li>Public Speaking</li>
                <li>Problem Solving</li>
                <li>Easily adapt to the surrounding environment</li>
                <li>Build good relationships with new individu.</li>
                <div className="card-actions justify-end">
                  <button className="btn bg-yellow-300">Documentation</button>
                </div>
              </div>
            </div>
            <div>
              <img className="h-44 rounded-full" src={Veve} alt="Veve" />
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            className="flex flex-col items-center gap-5 lg:gap-20 lg:flex-row"
          >
            <div>
              <img className=" h-44 rounded-full" src={Veve} alt="Veve" />
            </div>
            <div className="items-center w-[400px] lg:w-[600px] rounded-lg card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hard Skill👩‍🔧</h2>
                <p>
                  You could see my several projects in portfolio menu which is
                  Design and Web
                </p>

                <h2 className="text-center font-bold">Web Skill🔧</h2>
                <div className="flex px-6 pt-4 pb-2">
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Html} width={20} />
                    HTML
                  </span>
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Css} width={20} />
                    CSS
                  </span>
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={React} width={20} />
                    React
                  </span>
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={tailwind} width={20} />
                    Tailwind
                  </span>
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Php} width={20} />
                    PHP
                  </span>
                </div>
                <div className="flex px-6 pt-4 pb-2">
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Bs} width={20} />
                    Boostrap
                  </span>
                </div>

                <h2 className="text-center font-bold">Design Skill🖌</h2>
                <div className="flex px-6 pt-4 pb-2">
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Figma} width={20} />
                    Figma
                  </span>
                  <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <img src={Canva} width={20} />
                    Canva
                  </span>
                </div>

                <div className="card-actions justify-end">
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button className="btn bg-yellow-300">My Portfolio</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
