import React from "react";
import { Link } from "react-router-dom";

const Kitchen = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Link className="btn mt-4" to="/add-kitchen">
        Add Service
      </Link>
    </div>
  );
};

export default Kitchen;
