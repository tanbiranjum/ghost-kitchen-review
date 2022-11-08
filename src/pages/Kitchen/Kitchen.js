import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const Kitchen = () => {
  const kitchens = useLoaderData();
  return (
    <div className="mx-auto max-w-6xl">
      <Link className="btn mt-4" to="/add-kitchen">
        Add Service
      </Link>
      <div className="container flex justify-between flex-wrap py-6">
        {!kitchens && <div>Loading...</div>}
        {kitchens &&
          kitchens?.data.map((kitchen) => (
            <Card key={kitchen._id} kitchen={kitchen} />
          ))}
      </div>
    </div>
  );
};

export default Kitchen;
