import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { removeTokenFromLocalStorage } from "../../utils/utils";
import Logo from "../../assets/ghost.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    removeTokenFromLocalStorage();
    navigate("/login");
  };
  // TODO - change header (use flowbite header)
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex justify-between w-full">
          <Link
            to="/"
            aria-label="Back to homepage"
            className="flex justify-center items-center p-2 gap-2"
          >
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <p className="text-lg text-yellow-500">Ghost Kitchen</p>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent";
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/kitchen"
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent";
                }}
              >
                Kitchens
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/my-reviews"
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent";
                }}
              >
                My Reviews
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                rel="noopener noreferrer"
                to="/add-kitchen"
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-violet-400"
                    : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent";
                }}
              >
                Add Kitchen
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {!user?.uid && (
            <button className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Log in
            </button>
          )}
          {user?.uid && (
            <button
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              onClick={handleLogout}
            >
              Log Out
            </button>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
