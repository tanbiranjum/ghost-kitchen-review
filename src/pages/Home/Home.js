import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "../../components/About/About";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  useDocumentTitle("Home - Ghost Kitchen", true);

  useEffect(() => {
    fetch("https://ghost-kitchen-server.vercel.app/api/v1/kitchens?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setKitchens(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="">
      <Hero />
      <h2 className="text-3xl text-center mt-8 font-bold text-white">Ghost Kitchen</h2>
      {loading && <LoadingSpinner />}
      <div className="grid px-6 lg:px-0 grid-cols-1 md:grid-cols-8 lg:grid-cols-9 gap-6 lg:max-w-7xl mx-auto mt-8">
        {kitchens &&
          kitchens?.map((kitchen) => (
            <Card key={kitchen._id} kitchen={kitchen} />
          ))}
      </div>
      <div className="max-w-7xl px-6 lg:px-0 mx-auto">
        <Link
          to="/kitchen"
          className="btn bg-violet-700 hover:bg-violet-900 mt-4 text-white shadow-sm"
        >
          SEE ALL
        </Link>
      </div>
      <About />
      {/* START */}
      <section className="bg-gray-900 mt-6">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">
              Sign up for our Ghost newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xl text-gray-400">
              Stay up to date with the ghost kitchen, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm rounded-lg border sm:rounded-none sm:rounded-l-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer border-violet-600 sm:rounded-none sm:rounded-r-lg focus:ring-4 bg-violet-700 hover:bg-violet-800 focus:ring-violet-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left newsletter-form-footer text-gray-300">
                We care about the protection of your data.{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* END */}
    </div>
  );
};

export default Home;
