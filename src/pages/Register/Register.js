import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Register = () => {
  useDocumentTitle("Register - Ghost Kitchen", true);
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's Register!
          </h2>
          <div className="dark:text-gray-400">
            Register to give review now! & Share your horror experience
          </div>
        </div>
        <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Register;
