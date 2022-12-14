import React from "react";
import Lottie from "react-lottie";
import utensilsAnimation from "../../assets/loading-utensils.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: utensilsAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default LoadingSpinner;
