import React from "react";
import Logo from "../../assets/ghost.png";

const Footer = () => {
  return (
    <footer className="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <img src={Logo} alt="footer logo" className="h-10 w-10" />
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a rel="noopener noreferrer" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Facebook
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

// TODO 1. Link shoud be updated
// TODO 2. Add Menu
// TODO 3. Add Social Links
// TODO 4. Add copy right

export default Footer;
