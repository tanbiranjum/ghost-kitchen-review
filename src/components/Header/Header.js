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
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "text-white" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kitchen"
                className={({ isActive }) => {
                  return isActive ? "text-white" : "";
                }}
              >
                Kitchen
              </NavLink>
            </li>
            {user?.uid && (
              <li>
                <NavLink
                  to="/my-reviews"
                  className={({ isActive }) => {
                    return isActive ? "text-white" : "";
                  }}
                >
                  My Reviews
                </NavLink>
              </li>
            )}
            {user?.uid && (
              <li>
                <NavLink
                  to="/add-kitchen"
                  className={({ isActive }) => {
                    return isActive ? "text-white" : "";
                  }}
                >
                  Add Kitchen
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => {
                  return isActive ? "text-white" : "";
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          aria-label="Back to homepage"
          className="flex justify-center items-center p-2 gap-2"
        >
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <p className="text-xl text-yellow-500 font-bold">Ghost Kitchen</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "text-white" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kitchen"
              className={({ isActive }) => {
                return isActive ? "text-white" : "";
              }}
            >
              Kitchen
            </NavLink>
          </li>
          {user?.uid && (
            <li>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) => {
                  return isActive ? "text-white" : "";
                }}
              >
                My Reviews
              </NavLink>
            </li>
          )}
          {user?.uid && (
            <li>
              <NavLink
                to="/add-kitchen"
                className={({ isActive }) => {
                  return isActive ? "text-white" : "";
                }}
              >
                Add Kitchen
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => {
                return isActive ? "text-white" : "";
              }}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user?.uid && (
          <Link to="/login" className="btn">
            Log in
          </Link>
        )}
        {user?.uid && (
          <button className="btn" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
