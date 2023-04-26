import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="bg-gray-800">
      <Header />
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
