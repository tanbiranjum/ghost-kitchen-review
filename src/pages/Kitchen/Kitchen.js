import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Kitchen = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  useDocumentTitle("Kitchen - Ghost Kitchen");

  useEffect(() => {
    fetch("https://ghost-kitchen-server.vercel.app/api/v1/kitchens")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setKitchens(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="mx-auto max-w-6xl">
      <Link className="btn mt-4" to="/add-kitchen">
        Add Kitchen
      </Link>
      {loading && <LoadingSpinner />}
      <div className="container grid grid-cols-9 gap-6 py-6">
        {kitchens &&
          kitchens?.map((kitchen) => (
            <Card key={kitchen._id} kitchen={kitchen} />
          ))}
      </div>
    </div>
  );
};

export default Kitchen;
