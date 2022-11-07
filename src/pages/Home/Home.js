import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home - Ghost Kitchen Review", true);
  return <div>Home</div>;
};

export default Home;
