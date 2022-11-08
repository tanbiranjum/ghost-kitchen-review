import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const kitchens = useLoaderData();
  useDocumentTitle("Home - Ghost Kitchen Review", true);
  return (
    <div className="container flex gap-6 py-6 max-w-6xl mx-auto">
      {!kitchens && <div>Loading...</div>}
      {kitchens &&
        kitchens?.data.map((kitchen) => (
          <Card key={kitchen._id} kitchen={kitchen} />
        ))}
    </div>
  );
};

export default Home;
