import FancyHeader from "./FancyHeader";
import miftahshop from "../assets/images/miftahshop.png";
import coxgameshop from "../assets/images/coxgameshop.png";
import bvjbva from "../assets/images/bvj-bva.png";
import rchscaa from "../assets/images/rchscaa.png";
import karigor from "../assets/images/karigors.png";
import Technology from "./Technology";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Customers = () => {
  return (
    <div className="px-20 pt-20 flex flex-col justify-start items-start gap-6">
      <FancyHeader text="MY WORKS" />
      <div className="grid grid-cols-3 gap-6 w-full">
        <div className="bg-pink-100 p-5 rounded-md border border-gray-100">
          <div className="_center">
            <img src={miftahshop} height={20} width={100} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Miftah Shop</h1>
            <p>Miftashop is a book selling e-commerce website.</p>
          </div>

          <div className="flex justify-start items-start gap-3 flex-wrap py-1">
            <span className="font-semibold">Technology:</span>
            <Technology text="Next Js" />
            <Technology text="MySQL" />
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="font-semibold">Colors:</span>
            <div className="flex justify-start items-start">
              <div className="bg-orange-600 h-6 w-5"></div>
              <div className="bg-pink-200 h-6 w-5"></div>
              <div className="bg-gray-600 h-6 w-5"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-3 py-1">
            <span className="font-semibold whitespace-nowrap">
              Hosting Info:
            </span>
            <span>VPS/ubuntu 22.04, nginx, certbot and tmux</span>
          </div>

          <div className="mt-3">
            <a
              href="https://miftahshop.com"
              target="_blank"
              className="w-full p-2 rounded-full border border-sky-500 text-sky-600 _center gap-3"
            >
              <span>miftahshop.com</span>
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
        <div className="bg-blue-50 p-5 rounded-md border border-gray-100">
          <div className="_center">
            <img src={coxgameshop} height={20} width={100} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Coxgame Shop</h1>
            <p>Coxgameshop is a game assets selling e-commerce website.</p>
          </div>

          <div className="flex justify-start items-start gap-3 flex-wrap py-1">
            <span className="font-semibold">Technology:</span>
            <Technology text="Next Js" />
            <Technology text="MySQL" />
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="font-semibold">Colors:</span>
            <div className="flex justify-start items-start">
              <div className="bg-blue-700 h-6 w-5"></div>
              <div className="bg-gray-200 h-6 w-5"></div>
              <div className="bg-blue-900 h-6 w-5"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-3 py-1">
            <span className="font-semibold whitespace-nowrap">
              Hosting Info:
            </span>
            <span>Cpanel Shared Hosting</span>
          </div>

          <div className="mt-3">
            <a
              href="https://coxgameshop.com"
              target="_blank"
              className="w-full p-2 rounded-full border border-sky-500 text-sky-600 _center gap-3"
            >
              <span>coxgameshop.com</span>
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-md border border-gray-100">
          <div className="_center">
            <img src={bvjbva} height={20} width={50} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">BVJ-BVA</h1>
            <p>Official Website of Bangladesh Veterinary Journal</p>
          </div>

          <div className="flex justify-start items-start gap-3 flex-wrap py-1">
            <span className="font-semibold">Technology:</span>
            <Technology text="Next Js" />
            <Technology text="MySQL" />
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="font-semibold">Colors:</span>
            <div className="flex justify-start items-start">
              <div className="bg-blue-500 h-6 w-5"></div>
              <div className="bg-white h-6 w-5"></div>
              <div className="bg-gray-600 h-6 w-5"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-3 py-1">
            <span className="font-semibold whitespace-nowrap">
              Hosting Info:
            </span>
            <span>Cpanel Shared Hosting</span>
          </div>

          <div className="mt-3">
            <a
              href="https://www.bvj-bva.org"
              target="_blank"
              className="w-full p-2 rounded-full border border-sky-500 text-sky-600 _center gap-3"
            >
              <span>www.bvj-bva.org</span>
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
        <div className="bg-sky-50 p-5 rounded-md border border-gray-100">
          <div className="_center">
            <img src={rchscaa} height={20} width={70} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">RCHSCAA</h1>
            <p>
              This is the official website of Rajshahi College HSC Alumni
              Asociation
            </p>
          </div>

          <div className="flex justify-start items-start gap-3 flex-wrap py-1">
            <span className="font-semibold">Technology:</span>
            <Technology text="Node Js" />
            <Technology text="MySQL" />
            <Technology text="Ejs" />
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="font-semibold">Colors:</span>
            <div className="flex justify-start items-start">
              <div className="bg-sky-600 h-6 w-5"></div>
              <div className="bg-red-700 h-6 w-5"></div>
              <div className="bg-yellow-300 h-6 w-5"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-3 py-1">
            <span className="font-semibold whitespace-nowrap">
              Hosting Info:
            </span>
            <span>Cpanel Shared Hosting</span>
          </div>

          <div className="mt-3">
            <a
              href="https://rchscaa.org"
              target="_blank"
              className="w-full p-2 rounded-full border border-sky-500 text-sky-600 _center gap-3"
            >
              <span>www.rchscaa.org</span>
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>

        <div className="bg-green-50 p-5 rounded-md border border-gray-100">
          <div className="_center">
            <img src={karigor} height={20} width={80} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Karigors</h1>
            <p>Karigors is a landing page for an application.</p>
          </div>

          <div className="flex justify-start items-start gap-3 flex-wrap py-1">
            <span className="font-semibold">Technology:</span>
            <Technology text="Node JS" />
            <Technology text="MySQL" />
            <Technology text="Ejs" />
          </div>
          <div className="flex justify-start items-start gap-3">
            <span className="font-semibold">Colors:</span>
            <div className="flex justify-start items-start">
              <div className="bg-blue-600 h-6 w-5"></div>
              <div className="bg-green-600 h-6 w-5"></div>
              <div className="bg-gray-200 h-6 w-5"></div>
            </div>
          </div>

          <div className="flex justify-start items-start gap-3 py-1">
            <span className="font-semibold whitespace-nowrap">
              Hosting Info:
            </span>
            <span>Cpanel Shared Hosting</span>
          </div>

          <div className="mt-3">
            <a
              href="https://karigors.com"
              target="_blank"
              className="w-full p-2 rounded-full border border-sky-500 text-sky-600 _center gap-3"
            >
              <span>karigors.com</span>
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
