import React from "react";
import { useLoaderData } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const kitchens = useLoaderData();
  useDocumentTitle("Home - Ghost Kitchen Review", true);
  return (
    <div>
      {!kitchens && <div>Loading...</div>}
      {kitchens &&
        kitchens?.data.map((kitchen) => (
          <div key={kitchen._id}>
            <h1>{kitchen.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default Home;
