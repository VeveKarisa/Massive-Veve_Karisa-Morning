import Porto from "../Album/porto.png";
import Labor from "../Album/labor.png";
import Money from "../Album/money.png";
import Soon from "../Album/soon.jpg";
import React from "../Album/react.png";
import tailwind from "../Album/tailwind.png";
import Php from "../Album/php.png";
import Bs from "../Album/bootstrap.png";
import Css from "../Album/css.png";
import Html from "../Album/html.png";

function Portfolio() {
  return (
    <div>
      <h1
        data-aos="zoom-in-up"
        className="font-bold mt-10 text-4xl text-center"
      >
        Portfolio
      </h1>
      <div className="flex flex-col lg:flex-row mt-10 mx-14">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="portfolio"
          className="max-w-lg rounded shadow-lg m-auto mt-10 mb-10"
        >
          <img
            className="w-full rounded-lg"
            src={Porto}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex px-6 pt-4 pb-2">
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={React} width={20} />
              React
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={tailwind} width={20} />
              Tailwind
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Html} width={20} />
              HTML
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Css} width={20} />
              CSS
            </span>
          </div>
          <div className="p-5 card-actions justify-end">
            <button className="btn bg-yellow-300 ">See More</button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="portfolio"
          className="max-w-lg rounded shadow-lg m-auto mt-10 mb-10"
        >
          <img
            className="w-full rounded-lg"
            src={Labor}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex px-6 pt-4 pb-2">
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Php} width={20} />
              PHP
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Bs} width={20} />
              Bootstrap
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Html} width={20} />
              HTML
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Css} width={20} />
              CSS
            </span>
          </div>
          <div className="p-5 card-actions justify-end">
            <button className="btn bg-yellow-300 ">See More</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mx-14">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="portfolio"
          className="max-w-lg rounded shadow-lg m-auto mt-10 mb-10"
        >
          <img
            className="w-full rounded-lg"
            src={Money}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Money Wise Website</div>
            <p className="text-gray-700 text-base">
              Money Wise adalah website yang dapat membantu orang tua untuk
              memberikan literasi mengenai keuangan kepada anak-anaknya dan
              membantu anak-anak dalam mempelajari keuangan melalui fitur
              interaktif dan games yang menarik
            </p>
          </div>
          <div className="flex px-6 pt-4 pb-2">
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Html} width={20} />
              HTML
            </span>
            <span className=" flex w-24 justify-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Css} width={20} />
              CSS
            </span>
          </div>
          <div className="p-5 card-actions justify-end">
            <button className="btn bg-yellow-300 ">See More</button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="portfolio"
          className="max-w-lg rounded shadow-lg m-auto mt-10 mb-10"
        >
          <img
            className="w-full rounded-lg"
            src={Soon}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Coming Soon</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #sedang
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #dalam
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #pengerjaan
            </span>
          </div>
          <div className="p-5 card-actions justify-end">
            <button className="btn bg-yellow-300 ">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
