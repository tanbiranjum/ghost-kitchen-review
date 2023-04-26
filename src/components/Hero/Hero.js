import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import womenCooking from "../../assets/women-cooking-in-kitchen.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: womenCooking,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto flex py-16 px-8 xl:px-0">
        <div className="mr-auto place-self-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-yellow-500">
            Your Virtual Kitchen Service
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Share your experience with us. Give your honest opinion about our
            country wide cloud kitchen service.
          </p>
          <Link
            to="/kitchen"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-primary-900"
          >
            All Kitchens
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            Blog
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
