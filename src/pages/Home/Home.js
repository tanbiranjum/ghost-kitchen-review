import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  const kitchens = useLoaderData();
  useDocumentTitle("Home - Ghost Kitchen Review", true);
  return (
    <div className="container py-6 max-w-6xl mx-auto">
      {!kitchens && <div>Loading...</div>}
      <div className="flex gap-6 ">
        {kitchens &&
          kitchens?.data.map((kitchen) => (
            <Card key={kitchen._id} kitchen={kitchen} />
          ))}
      </div>
      <Link
        to="/kitchen"
        className="btn bg-violet-700 hover:bg-violet-900 mt-4 text-white"
      >
        SEE ALL
      </Link>
    </div>
  );
};

export default Home;
