import React, { useState } from "react";
import Lottie from "react-lottie";
import LoginForm from "../../components/LoginForm/LoginForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import cookingAnimation from "../../assets/cooking-green.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: cookingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Login = () => {
  useDocumentTitle("Login - Ghost Kitchen", true);
  const [loading, setLoading] = useState(false);
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's Login!
          </h2>
          <div className="dark:text-gray-400">
            Login to give review now! & Share your horror experience
          </div>
          <div className="flex w-full justify-start">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
