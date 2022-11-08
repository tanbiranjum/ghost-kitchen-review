import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Kitchen = () => {
  const kitchens = useLoaderData();
  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto max-w-6xl">
      <Link className="btn mt-4" to="/add-kitchen">
        Add Kitchen
      </Link>
      <div className="container grid grid-cols-9 gap-6 py-6">
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
