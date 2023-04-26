import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import JoinNow from "../../assets/join now.svg";

const Login = () => {
  useDocumentTitle("Login - Ghost Kitchen", true);

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl text-center font-bold leading-tight lg:text-5xl">
            Let's Login!
          </h2>
          <div className="flex w-full justify-center my-8">
            <img src={JoinNow} alt="join now" className="h-72 mx-auto" />
          </div>
          <div className="text-gray-400 text-center">
            Login to give review now! & Share your horror experience
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
