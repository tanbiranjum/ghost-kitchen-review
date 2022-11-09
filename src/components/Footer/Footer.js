import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ghost.png";

// dark bg gray text gray

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-6 lg:p-6 dark:bg-violet-900">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl gap-2 font-semibold text-gray-900 dark:text-white"
        >
          <img src={Logo} alt="logo" className="w-10 h-10" />
          Ghost Kitchen
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Best Cloud Kitchen Service that you can trust for your own good and
          get your food fresh and healthy
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link to="/kitchen" className="mr-4 hover:underline md:mr-6 ">
              Kitchen
            </Link>
          </li>
          <li>
            <Link href="/blog" className="mr-4 hover:underline md:mr-6">
              Blog
            </Link>
          </li>
          <li>
            <a
              target="_"
              href="https://facebook.com"
              className="mr-4 hover:underline md:mr-6"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_"
              href="https://twitter.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_"
              href="https://linkedin.com/"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Ghost Kitchen™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

// TODO 1. Link shoud be updated
// TODO 2. Add Menu
// TODO 3. Add Social Links
// TODO 4. Add copy right

export default Footer;
